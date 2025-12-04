import React, {memo, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {completeConnectionTo, selectNode, setHoveredNode, setNodeLabel, startConnectionFrom} from './diagramSlice';
import {EDITOR_INSET_PX, TASK_FONT_FAMILY, TASK_FONT_SIZE_PX, TASK_LINE_HEIGHT_PX, TASK_PADDING_PX, getNodeBounds} from './geometry';

import type {RootState} from '../store';
import type {NodeModel} from './types';

interface Props {
  node: NodeModel
  // Optional external edit request (used for Safari overlay editor)
  onRequestExternalEdit?: (payload: {
    nodeId: string
    initialText: string
    svgRect: {x: number; y: number; w: number; h: number}
  }) => void
  // When provided, hides the static label for the node currently being edited externally
  externallyEditingNodeId?: string
}

function isEditableEventTarget(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName?.toLowerCase();
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return true;
  if (el.isContentEditable) return true;
  if (typeof el.closest === 'function' && el.closest('[contenteditable="true"]')) return true;
  return false;
}

function NodeViewImpl({node, onRequestExternalEdit, externallyEditingNodeId}: Props) {
  const dispatch = useDispatch();
  const isSelected = useSelector((s: RootState) => s.diagram.selection.nodeIds.includes(node.id));
  const {toolMode, pendingConnectionFrom} = useSelector((s: RootState) => s.diagram.ui);
  const [isEditing, setEditing] = useState(false);
  const [editingBounds, setEditingBounds] = useState<{w: number; h: number} | null>(null);
  const groupRef = useRef<SVGGElement>(null);

  const bounds = getNodeBounds(node);
  const width = bounds.w;
  const height = bounds.h;
  const borderRadius = node.type === 'task' ? 10 : 24;

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
    if (node.type === 'task') {
      // If external edit is provided (Safari overlay), use it instead of foreignObject
      if (onRequestExternalEdit) {
        onRequestExternalEdit({
          nodeId: node.id,
          initialText: node.label ?? '',
          svgRect: {
            x: Math.round(positionX + EDITOR_INSET_PX),
            y: Math.round(positionY + EDITOR_INSET_PX),
            w: Math.round(Math.max(0, width - EDITOR_INSET_PX * 2)),
            h: Math.round(Math.max(0, height - EDITOR_INSET_PX * 2)),
          },
        });
        return;
      }
      // Freeze the current bounds so the textarea doesn't shrink/expand on enter
      setEditingBounds({w: width, h: height});
      setEditing(true);
    }
  };

  const strokeColor = isSelected ? '#6366f1' : 'rgba(255,255,255,0.35)';
  const fillColor = node.type === 'task' ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.06)';

  const handleCenterX = positionX + width;
  const handleCenterY = positionY + height / 2;

  return (
    <g
      ref={groupRef}
      onClick={handleNodeClick}
      onMouseEnter={() => dispatch(setHoveredNode(node.id))}
      onMouseLeave={() => dispatch(setHoveredNode(undefined))}
      tabIndex={0}
      onKeyDown={(e) => {
        // Do not hijack keys when an editable element is the event source (e.g., inline label input)
        if (isEditableEventTarget(e.target)) return;
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
      {node.type === 'task' && !isEditing && externallyEditingNodeId !== node.id && (
        (() => {
          const labelText = (node.label ?? 'Task').toString();
          const lines = labelText.split('\n');
          const lineHeight = TASK_LINE_HEIGHT_PX; // px
          // Center block of lines vertically around the center baseline (+5 tweak retained)
          const startY = positionY + height / 2 + 5 - ((lines.length - 1) * lineHeight) / 2;
          return (
            <text
              x={positionX + width / 2}
              y={startY}
              textAnchor="middle"
              fontSize={TASK_FONT_SIZE_PX}
              fontFamily={TASK_FONT_FAMILY}
              onDoubleClick={handleLabelDoubleClick}
              fill="#ffffff"
              style={{userSelect: 'none', pointerEvents: 'auto', whiteSpace: 'pre'}}
            >
              {lines.map((line, idx) => (
                <tspan key={idx} x={positionX + width / 2} dy={idx === 0 ? 0 : lineHeight}>
                  {line || ' '}
                </tspan>
              ))}
            </text>
          );
        })()
      )}

      {isEditing && (
        <foreignObject
          x={Math.round(positionX + TASK_PADDING_PX)}
          y={Math.round(positionY + TASK_PADDING_PX)}
          width={Math.round(Math.max(0, (editingBounds?.w ?? width) - TASK_PADDING_PX * 2))}
          height={Math.round(Math.max(0, (editingBounds?.h ?? height) - TASK_PADDING_PX * 2))}
        >
          {/* XHTML wrapper is required for consistent foreignObject rendering across browsers */}
          { }
          {React.createElement(
              'div',
              {xmlns: 'http://www.w3.org/1999/xhtml', style: {width: '100%', height: '100%'}},
              <textarea
                autoFocus
                aria-label="Edit task name"
                defaultValue={node.label ?? ''}
                rows={3}
                onBlur={(e) => {
                  setEditing(false);
                  setEditingBounds(null);
                  dispatch(setNodeLabel({id: node.id, label: e.currentTarget.value}));
                  // restore focus to the node group for keyboard navigation
                  setTimeout(() => groupRef.current?.focus(), 0);
                }}
                onKeyDown={(e) => {
                  // Enter inserts newline by default; Escape cancels editing without commit
                  if (e.key === 'Escape') {
                    e.preventDefault();
                    setEditing(false);
                    setEditingBounds(null);
                    setTimeout(() => groupRef.current?.focus(), 0);
                  }
                }}
                style={{
                  display: 'block',
                  margin: 0,
                  width: '100%',
                  height: '100%',
                  minHeight: '100%',
                  resize: 'vertical',
                  background: 'rgba(255,255,255,0.06)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 6,
                  padding: '6px 8px',
                  lineHeight: `${16}px`,
                  fontSize: `${TASK_FONT_SIZE_PX}px`,
                  fontFamily: TASK_FONT_FAMILY,
                  whiteSpace: 'pre-wrap',
                  overflow: 'auto',
                  boxSizing: 'border-box',
                }}
              />,
          )}
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
