import React, {memo, useMemo, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {completeConnectionTo, selectNode, setHoveredNode, setNodeLabel, startConnectionFrom} from './diagramSlice';

import type {RootState} from '../store';
import type {NodeModel} from './types';

interface Props {
  node: NodeModel
}

function NodeViewImpl({node}: Props) {
  const dispatch = useDispatch();
  const isSelected = useSelector((s: RootState) => s.diagram.selection.nodeIds.includes(node.id));
  const {toolMode, pendingConnectionFrom} = useSelector((s: RootState) => s.diagram.ui);
  const [isEditing, setEditing] = useState(false);
  const groupRef = useRef<SVGGElement>(null);

  const {width, height, borderRadius} = useMemo(() => {
    switch (node.type) {
      case 'task':
        return {width: 140, height: 56, borderRadius: 10};
      case 'start':
      case 'end':
        return {width: 48, height: 48, borderRadius: 24};
    }
  }, [node.type]);

  const positionX = node.position.x;
  const positionY = node.position.y;

  const handleNodeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (toolMode === 'connect' && pendingConnectionFrom && pendingConnectionFrom !== node.id) {
      dispatch(completeConnectionTo(node.id));
    } else {
      dispatch(selectNode(node.id));
    }
  };

  const handleLabelDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (node.type === 'task') setEditing(true);
  };

  const strokeColor = isSelected ? '#6366f1' : 'rgba(255,255,255,0.35)';
  const fillColor = node.type === 'task' ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.06)';

  const handleCenterX = node.type === 'task' ? positionX + width : positionX + width;
  const handleCenterY = node.type === 'task' ? positionY + height / 2 : positionY + height / 2;

  return (
    <g
      ref={groupRef}
      onClick={handleNodeClick}
      onMouseEnter={() => dispatch(setHoveredNode(node.id))}
      onMouseLeave={() => dispatch(setHoveredNode(undefined))}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          dispatch(selectNode(node.id));
        }
      }}
      role="button"
      aria-label={`${node.type === 'task' ? 'Task' : node.type === 'start' ? 'Start' : 'End'} node${node.label ? `: ${node.label}` : ''}`}
    >
      {node.type === 'task' ? (
        <rect x={positionX} y={positionY} width={width} height={height} rx={borderRadius} fill={fillColor} stroke={strokeColor} />
      ) : node.type === 'start' ? (
        <circle cx={positionX + borderRadius} cy={positionY + borderRadius} r={borderRadius} fill={fillColor} stroke={strokeColor} />
      ) : (
        // end: double circle
        <g>
          <circle cx={positionX + borderRadius} cy={positionY + borderRadius} r={borderRadius} fill={fillColor} stroke={strokeColor} />
          <circle cx={positionX + borderRadius} cy={positionY + borderRadius} r={borderRadius - 5} fill={fillColor} stroke={strokeColor} />
        </g>
      )}

      {/* label */}
      {node.type === 'task' && !isEditing && (
        <text x={positionX + width / 2} y={positionY + height / 2 + 5} textAnchor="middle" fontSize={14} onDoubleClick={handleLabelDoubleClick}
          fill="#ffffff" style={{userSelect: 'none', pointerEvents: 'auto'}}>
          {node.label ?? 'Task'}
        </text>
      )}

      {isEditing && (
        <foreignObject x={positionX + 8} y={positionY + height / 2 - 14} width={width - 16} height={28}>
          <input
            autoFocus
            defaultValue={node.label ?? ''}
            onBlur={(e) => {
              setEditing(false);
              dispatch(setNodeLabel({id: node.id, label: e.currentTarget.value}));
              // restore focus to the node group for keyboard navigation
              setTimeout(() => groupRef.current?.focus(), 0);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
              if (e.key === 'Escape') setEditing(false);
            }}
            style={{width: '100%', background: 'rgba(255,255,255,0.06)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 6, padding: '4px 6px'}}
          />
        </foreignObject>
      )}

      {/* connection handle */}
      <circle
        cx={handleCenterX}
        cy={handleCenterY}
        r={6}
        fill={toolMode === 'connect' && pendingConnectionFrom === node.id ? '#6366f1' : 'rgba(255,255,255,0.2)'}
        stroke={strokeColor}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(startConnectionFrom(node.id));
        }}
        aria-label={`Connect from ${node.label ?? node.type} node`}
      />
    </g>
  );
}

const NodeView = memo(NodeViewImpl);
export default NodeView;
