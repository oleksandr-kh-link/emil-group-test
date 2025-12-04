import React, {useMemo, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ExportModal from './components/ExportModal';
import GridPattern from './components/GridPattern';
import ImportModal from './components/ImportModal';
import {
  addNode,
  clearSelection,
  deleteSelected,
  loadDiagram,
  moveNode,
  selectNode,
  setImportErrors,
} from './diagramSlice';
import EdgeView from './EdgeView';
import {useDragNode} from './hooks/useDragNode';
import {useKeyboardShortcuts} from './hooks/useKeyboardShortcuts';
import NodeView from './NodeView';

import type {RootState} from '../store';
// no direct NodeModel usage here

export default function Editor() {
  const dispatch = useDispatch();
  const nodes = useSelector((s: RootState) => s.diagram.nodes);
  const edges = useSelector((s: RootState) => s.diagram.edges);
  const [showExport, setShowExport] = useState(false);
  const [exportText, setExportText] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [importText, setImportText] = useState('');
  const importErrors = useSelector((s: RootState) => s.diagram.ui.importErrors);
  const keyboardEnabled = useSelector((s: RootState) => s.config?.keyboardEnabled ?? true);

  const nodesById = useMemo(() => Object.fromEntries(nodes.map((n) => [n.id, n])), [nodes]);

  const svgElementRef = useRef<SVGSVGElement>(null);

  const handleBackgroundClick = () => dispatch(clearSelection());

  const {handleMouseDown, handleMouseMove, handleMouseUp} = useDragNode({
    svgRef: svgElementRef,
    nodes,
    nodesById,
    onSelectNode: (id) => dispatch(selectNode(id)),
    onMoveNode: (id, position) => dispatch(moveNode({id, position})),
  });

  useKeyboardShortcuts({onDelete: keyboardEnabled ? () => dispatch(deleteSelected()) : undefined});

  return (
    <div style={{display: 'grid', gridTemplateRows: '40px 1fr', height: '100%'}}>
      <div style={{display: 'flex', gap: 8, alignItems: 'center', padding: '6px 10px'}}>
        <button onClick={() => dispatch(addNode('start', {x: 80, y: 80}))}>+ Start</button>
        <button onClick={() => dispatch(addNode('task', {x: 200, y: 80}))}>+ Task</button>
        <button onClick={() => dispatch(addNode('end', {x: 380, y: 80}))}>+ End</button>
        <button onClick={() => dispatch(deleteSelected())} style={{marginLeft: 12}}>Delete</button>
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
          <NodeView key={n.id} node={n} />
        ))}
      </svg>

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
            const {safeImportFromExampleJson} = await import('./types');
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
  const {exportToExampleJson} = await import('./types');
  const json = exportToExampleJson({nodes, edges});
  return JSON.stringify(json, null, 2);
}
