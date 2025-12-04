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
    const svgPointInput = svg.createSVGPoint();
    svgPointInput.x = clientX;
    svgPointInput.y = clientY;
    const transformedSvgPoint = svgPointInput.matrixTransform(svg.getScreenCTM()?.inverse());
    return {x: transformedSvgPoint.x, y: transformedSvgPoint.y};
  }, [svgRef]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const svgPoint = clientToSvg(e.clientX, e.clientY);
    const hitNodeResult = getTopmostHitNode(svgPoint, nodes);
    if (hitNodeResult) {
      const node = nodesById[hitNodeResult.id];
      if (onDragStart) onDragStart(hitNodeResult.id);
      setDragState({id: hitNodeResult.id, offset: {x: svgPoint.x - node.position.x, y: svgPoint.y - node.position.y}});
      onSelectNode(hitNodeResult.id);
    }
  }, [clientToSvg, nodes, nodesById, onSelectNode, onDragStart]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragState) return;
    const svgPointCurrent = clientToSvg(e.clientX, e.clientY);
    const newPosition = {x: svgPointCurrent.x - dragState.offset.x, y: svgPointCurrent.y - dragState.offset.y};
    onMoveNode(dragState.id, newPosition);
  }, [clientToSvg, dragState, onMoveNode]);

  const handleMouseUp = useCallback(() => setDragState(undefined), []);

  return {handleMouseDown, handleMouseMove, handleMouseUp, dragging: !!dragState};
}
