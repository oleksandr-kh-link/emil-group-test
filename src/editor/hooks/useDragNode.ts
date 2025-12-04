import {useCallback, useState} from 'react';

import {getTopmostHitNode} from '../geometry';

import type {NodeModel, Point} from '../types';

export interface UseDragNodeOptions {
  svgRef: React.RefObject<SVGSVGElement>
  nodes: NodeModel[]
  nodesById: Record<string, NodeModel>
  onSelectNode: (id: string) => void
  onMoveNode: (id: string, position: Point) => void
  onDragStart?: (id: string) => void
}

export function useDragNode({svgRef, nodes, nodesById, onSelectNode, onMoveNode, onDragStart}: UseDragNodeOptions) {
  const [dragState, setDragState] = useState<
    | { id: string; offset: { x: number; y: number } }
    | undefined
  >();

  const clientToSvg = useCallback((clientX: number, clientY: number): Point => {
    const svg = svgRef.current;
    if (!svg) return {x: clientX, y: clientY};
    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const sp = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    return {x: sp.x, y: sp.y};
  }, [svgRef]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const p = clientToSvg(e.clientX, e.clientY);
    const hit = getTopmostHitNode(p, nodes);
    if (hit) {
      const node = nodesById[hit.id];
      if (onDragStart) onDragStart(hit.id);
      setDragState({id: hit.id, offset: {x: p.x - node.position.x, y: p.y - node.position.y}});
      onSelectNode(hit.id);
    }
  }, [clientToSvg, nodes, nodesById, onSelectNode, onDragStart]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragState) return;
    const p = clientToSvg(e.clientX, e.clientY);
    const newPosition = {x: p.x - dragState.offset.x, y: p.y - dragState.offset.y};
    onMoveNode(dragState.id, newPosition);
  }, [clientToSvg, dragState, onMoveNode]);

  const handleMouseUp = useCallback(() => setDragState(undefined), []);

  return {handleMouseDown, handleMouseMove, handleMouseUp, dragging: !!dragState};
}
