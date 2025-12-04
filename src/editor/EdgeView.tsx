import React, {memo, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectEdge, setHoveredEdge} from './diagramSlice';
import {getAnchorPointOnNodeBorder, getNodeBounds, getNodeCenter, route, toPath, type Obstacle} from './geometry';

import type {EdgeModel, NodeModel} from './types';
import type {RootState} from '../store';

interface Props {
  edge: EdgeModel
  nodes: Record<string, NodeModel>
}

function EdgeViewImpl({edge, nodes}: Props) {
  const sourceNode = nodes[edge.source];
  const targetNode = nodes[edge.target];
  if (!sourceNode || !targetNode) return null;

  const dispatch = useDispatch();
  const isSelected = useSelector((state: RootState) => state.diagram.selection.edgeIds.includes(edge.id));

  // Compute anchors on node borders toward the opposite center (rollback to previous behavior)
  const sourceCenter = getNodeCenter(sourceNode);
  const targetCenter = getNodeCenter(targetNode);
  const sourceAnchorPoint = getAnchorPointOnNodeBorder(sourceNode, targetCenter);
  const targetAnchorPoint = getAnchorPointOnNodeBorder(targetNode, sourceCenter);

  // Read padding from config (fallback to 8 if slice not present, e.g., in isolated tests)
  const obstaclePadding = useSelector((s: RootState) => (s as any).config?.obstaclePadding ?? 8);

  // Build obstacle list excluding the source and target (memoized per render frame)
  const obstacles: Obstacle[] = useMemo(() => {
    const out: Obstacle[] = [];
    for (const nodeItem of Object.values(nodes)) {
      if (!nodeItem) continue;
      if (nodeItem.id === sourceNode.id || nodeItem.id === targetNode.id) continue;
      const nodeBounds = getNodeBounds(nodeItem);
      if (nodeItem.type === 'task') {
        out.push({
          kind: 'rect',
          x: nodeBounds.x - obstaclePadding,
          y: nodeBounds.y - obstaclePadding,
          w: nodeBounds.w + obstaclePadding * 2,
          h: nodeBounds.h + obstaclePadding * 2,
        });
      } else {
        out.push({
          kind: 'circle',
          cx: nodeItem.position.x + 24,
          cy: nodeItem.position.y + 24,
          r: 24 + obstaclePadding,
        });
      }
    }
    return out;
  }, [nodes, sourceNode.id, targetNode.id, obstaclePadding]);

  const edgePathPoints = route(sourceAnchorPoint, targetAnchorPoint, obstacles);

  const markerId = `arrow-${edge.id}`;

  const edgeColor = isSelected ? '#6366f1' : '#e5e7eb';
  const edgeStrokeWidth = isSelected ? 3 : 2;

  const handleEdgeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(selectEdge(edge.id));
  };

  return (
    <g
      onClick={handleEdgeClick}
      onMouseEnter={() => dispatch(setHoveredEdge(edge.id))}
      onMouseLeave={() => dispatch(setHoveredEdge(undefined))}
      style={{cursor: 'pointer'}}
      tabIndex={0}
      role="button"
      aria-label={`Connection from ${sourceNode.label ?? sourceNode.type} to ${targetNode.label ?? targetNode.type}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          dispatch(selectEdge(edge.id));
        }
      }}
    >
      <defs>
        {/* Arrowhead marker – reduced to half size */}
        <marker id={markerId} markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto-start-reverse">
          <path d="M 0 0 L 5 2.5 L 0 5 z" fill={edgeColor} />
        </marker>
      </defs>

      {/* Visible edge */}
      {edgePathPoints.length === 2 ? (
        <>
          <line
            x1={edgePathPoints[0].x}
            y1={edgePathPoints[0].y}
            x2={edgePathPoints[1].x}
            y2={edgePathPoints[1].y}
            stroke={edgeColor}
            strokeOpacity={0.85}
            strokeWidth={edgeStrokeWidth}
            markerEnd={`url(#${markerId})`}
          />
          {/* Invisible, thick hit area for easier selection */}
          <line
            x1={edgePathPoints[0].x}
            y1={edgePathPoints[0].y}
            x2={edgePathPoints[1].x}
            y2={edgePathPoints[1].y}
            stroke="transparent"
            strokeWidth={16}
            pointerEvents="stroke"
          />
        </>
      ) : (
        <>
          <path
            d={toPath(edgePathPoints)}
            fill="none"
            stroke={edgeColor}
            strokeOpacity={0.85}
            strokeWidth={edgeStrokeWidth}
            markerEnd={`url(#${markerId})`}
          />
          {/* Invisible, thick hit area for easier selection */}
          <path d={toPath(edgePathPoints)} fill="none" stroke="transparent" strokeWidth={16} pointerEvents="stroke" />
        </>
      )}
    </g>
  );
}
// (Note) Special placement rules helper was removed earlier to restore default anchoring behavior.

const EdgeView = memo(EdgeViewImpl);
export default EdgeView;
