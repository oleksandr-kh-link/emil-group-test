import React, {useCallback, useMemo, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ExportModal from './components/ExportModal';
import GridPattern from './components/GridPattern';
import ImportModal from './components/ImportModal';
import {
  addNode,
  captureHistorySnapshot,
  clearSelection,
  deleteSelected,
  loadDiagram,
  moveNode,
  redo,
  selectNode,
  setImportErrors,
  setNodeLabel,
  undo,
} from './diagramSlice';
import EdgeView from './EdgeView';
import {TASK_FONT_FAMILY, TASK_FONT_SIZE_PX, TASK_LINE_HEIGHT_PX, TEXTAREA_PADDING_PX} from './geometry';
import {useDragNode} from './hooks/useDragNode';
import {useKeyboardShortcuts} from './hooks/useKeyboardShortcuts';
import NodeView from './NodeView';
import {exportToExampleJson, safeImportFromExampleJson} from './types';

import type {RootState} from '../store';
// no direct NodeModel usage here

export default function Editor() {
  const dispatch = useDispatch();
  const nodes = useSelector((s: RootState) => s.diagram.nodes);
  const edges = useSelector((s: RootState) => s.diagram.edges);
  const canUndo = useSelector((s: RootState) => (s.diagram as any).history?.past.length > 0);
  const canRedo = useSelector((s: RootState) => (s.diagram as any).history?.future.length > 0);
  const [showExport, setShowExport] = useState(false);
  const [exportText, setExportText] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [importText, setImportText] = useState('');
  const importErrors = useSelector((s: RootState) => s.diagram.ui.importErrors);
  const keyboardEnabled = useSelector((s: RootState) => s.config?.keyboardEnabled ?? true);

  const nodesById = useMemo(() => Object.fromEntries(nodes.map((n) => [n.id, n])), [nodes]);

  const svgElementRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Inline editor overlay state (HTML textarea rendered above SVG for all browsers)
  const [activeEdit, setActiveEdit] = useState<
    | {
        nodeId: string;
        initialText: string;
        svgRect: {x: number; y: number; w: number; h: number}; // inner rect (minus padding)
      }
    | null
  >(null);

  const handleBackgroundClick = () => dispatch(clearSelection());

  const {handleMouseDown, handleMouseMove, handleMouseUp} = useDragNode({
    svgRef: svgElementRef,
    nodes,
    nodesById,
    onSelectNode: (id) => dispatch(selectNode(id)),
    onMoveNode: (id, position) => dispatch(moveNode({id, position})),
    onDragStart: () => dispatch(captureHistorySnapshot()),
  });

  useKeyboardShortcuts({onDelete: keyboardEnabled ? () => dispatch(deleteSelected()) : undefined});

  const mapSvgRectToContainer = useCallback((rect: {x: number; y: number; w: number; h: number}) => {
    const svg = svgElementRef.current;
    const container = containerRef.current;
    if (!svg || !container) return {left: rect.x, top: rect.y, width: rect.w, height: rect.h};
    const ctm = svg.getScreenCTM();
    const containerBox = container.getBoundingClientRect();
    // Map top-left and bottom-right to screen coords, then to container-relative coords
    const p1 = svg.createSVGPoint();
    p1.x = rect.x;
    p1.y = rect.y;
    const p2 = svg.createSVGPoint();
    p2.x = rect.x + rect.w;
    p2.y = rect.y + rect.h;
    // jsdom may return null for CTM; fall back to raw rect
    if (!ctm) {
      const left = Math.round(rect.x - containerBox.left);
      const top = Math.round(rect.y - containerBox.top);
      const width = Math.round(rect.w);
      const height = Math.round(rect.h);
      return {left, top, width, height};
    }
    const sp1 = p1.matrixTransform(ctm);
    const sp2 = p2.matrixTransform(ctm);
    const left = Math.round(sp1.x - containerBox.left);
    const top = Math.round(sp1.y - containerBox.top);
    const width = Math.round(sp2.x - sp1.x);
    const height = Math.round(sp2.y - sp1.y);
    return {left, top, width, height};
  }, []);

  return (
    <div style={{display: 'grid', gridTemplateRows: '40px 1fr', height: '100%'}}>
      <div style={{display: 'flex', gap: 8, alignItems: 'center', padding: '6px 10px'}}>
        <button onClick={() => dispatch(addNode('start', {x: 80, y: 80}))}>+ Start</button>
        <button onClick={() => dispatch(addNode('task', {x: 200, y: 80}))}>+ Task</button>
        <button onClick={() => dispatch(addNode('end', {x: 380, y: 80}))}>+ End</button>
        <button onClick={() => dispatch(deleteSelected())} style={{marginLeft: 12}}>Delete</button>
        <button onClick={() => dispatch(undo())} disabled={!canUndo} title="Undo (⌘/Ctrl+Z)">Undo</button>
        <button onClick={() => dispatch(redo())} disabled={!canRedo} title="Redo (⌘/Ctrl+Y)">Redo</button>
        <button
          style={{marginLeft: 'auto'}}
          onClick={async () => {
            const text = await buildExportText(nodes, edges);
            setExportText(text);
            setShowExport(true);
          }}
        >
          Export JSON
        </button>
        <button onClick={() => setShowImport(true)}>Import JSON</button>
      </div>
      {/* Inline, polite error region for import feedback */}
      {importErrors && importErrors.length > 0 && (
        <div aria-live="polite" role="status" style={{padding: '0 10px 6px 10px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 8, color: '#fecaca'}}>
            <strong>Import errors:</strong>
            <button
              onClick={() => dispatch(setImportErrors(null))}
              aria-label="Dismiss import errors"
              style={{marginLeft: 8}}
            >
              Close
            </button>
          </div>
          <ul style={{margin: '6px 0 0 18px', color: '#fecaca'}}>
            {importErrors.map((e, idx) => (
              <li key={idx}>{e}</li>
            ))}
          </ul>
        </div>
      )}
      <div ref={containerRef} style={{position: 'relative', width: '100%', height: '100%'}}>
        <svg
          ref={svgElementRef}
          width="100%"
          height="100%"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onClick={handleBackgroundClick}
        >
          <GridPattern />
          {/* Edges below nodes for better z-index */}
          {edges.map((e) => (
            <EdgeView key={e.id} edge={e} nodes={nodesById} />
          ))}

          {nodes.map((n) => (
            <NodeView
              key={n.id}
              node={n}
              // Always use external overlay editor for consistency across browsers
              onRequestExternalEdit={(payload) => setActiveEdit(payload)}
              externallyEditingNodeId={activeEdit?.nodeId}
            />
          ))}
        </svg>

        {/* HTML overlay editor (active on all browsers) */}
        {activeEdit && (() => {
          const {left, top, width, height} = mapSvgRectToContainer(activeEdit.svgRect);
          return (
            <textarea
              aria-label="Edit task name"
              autoFocus
              defaultValue={activeEdit.initialText}
              onBlur={(e) => {
                dispatch(setNodeLabel({id: activeEdit.nodeId, label: e.currentTarget.value}));
                setActiveEdit(null);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  e.preventDefault();
                  setActiveEdit(null);
                }
              }}
              style={{
                position: 'absolute',
                left,
                top,
                width,
                height,
                display: 'block',
                margin: 0,
                minHeight: height,
                resize: 'vertical',
                background: 'rgba(255,255,255,0.06)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 6,
                padding: `${TEXTAREA_PADDING_PX}px`,
                lineHeight: `${TASK_LINE_HEIGHT_PX}px`,
                fontSize: `${TASK_FONT_SIZE_PX}px`,
                fontFamily: TASK_FONT_FAMILY,
                whiteSpace: 'pre-wrap',
                overflow: 'auto',
                boxSizing: 'border-box',
                // ensure overlay receives events only while visible
                pointerEvents: 'auto',
              }}
            />
          );
        })()}
      </div>

      {/* Export JSON Modal */}
      <ExportModal show={showExport} text={exportText} onClose={() => setShowExport(false)} />

      {/* Import JSON Modal with resizable textarea (vertical) */}
      <ImportModal
        show={showImport}
        initialText={importText}
        onImport={async (text) => {
          setImportText(text);
          try {
            const json = JSON.parse(text);
            const mapped = safeImportFromExampleJson(json);
            dispatch(loadDiagram(mapped));
            dispatch(setImportErrors(null));
            setShowImport(false);
          } catch (err) {
            const raw = err instanceof Error ? err.message : 'Invalid JSON';
            const lines = raw.split('\n');
            const bullets = lines
                .filter((l) => l.trim().startsWith('- '))
                .map((l) => l.replace(/^\s*-\s*/, ''));
            dispatch(setImportErrors(bullets.length > 0 ? bullets.slice(0, 5) : [raw]));
            // Close the modal on error per requirement
            setShowImport(false);
            window.setTimeout(() => dispatch(setImportErrors(null)), 6000);
          }
        }}
        onClose={() => setShowImport(false)}
      />
    </div>
  );
}

async function buildExportText(
    nodes: RootState['diagram']['nodes'],
    edges: RootState['diagram']['edges'],
): Promise<string> {
  const json = exportToExampleJson({nodes, edges});
  return JSON.stringify(json, null, 2);
}
