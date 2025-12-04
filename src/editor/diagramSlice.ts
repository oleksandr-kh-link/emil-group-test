import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {DiagramState, EdgeModel, NodeModel, NodeType, Point} from './types';

export interface SelectionState {
  nodeIds: string[]
  edgeIds: string[]
}

export interface SelectionBox {
  x1: number
  y1: number
  x2: number
  y2: number
}

export interface UIState {
  toolMode: 'select' | 'connect'
  pendingConnectionFrom?: string // node id when in connect drag
  // Extended UI state (proposal realized):
  hoveredNodeId?: string
  hoveredEdgeId?: string
  importErrors: string[] | null
  lastError?: { message: string; details?: string }
  selectionBox?: SelectionBox
  editingNodeId?: string
}

export interface EditorState extends DiagramState {
  selection: SelectionState
  ui: UIState
}

const initialState: EditorState = {
  nodes: [],
  edges: [],
  selection: {nodeIds: [], edgeIds: []},
  ui: {toolMode: 'select', importErrors: null},
};

const slice = createSlice({
  name: 'diagram',
  initialState,
  reducers: {
    addNode: {
      prepare: (type: NodeType, position: Point, label?: string, id?: string) => ({
        payload: {type, position, label, id},
      }),
      reducer(state, action: PayloadAction<{ type: NodeType; position: Point; label?: string; id?: string }>) {
        const {type, position, label, id} = action.payload;
        const node: NodeModel = {
          id: id ?? `node_${generateRandomId()}`,
          type,
          position: position,
          label: label ?? getDefaultLabel(type),
        };
        state.nodes.push(node);
        state.selection = {nodeIds: [node.id], edgeIds: []};
      },
    },
    moveNode(state, action: PayloadAction<{ id: string; position: Point }>) {
      const {id, position} = action.payload;
      const node = state.nodes.find((n) => n.id === id);
      if (node) node.position = position;
    },
    setNodeLabel(state, action: PayloadAction<{ id: string; label: string }>) {
      const n = state.nodes.find((x) => x.id === action.payload.id);
      if (n) n.label = action.payload.label;
    },
    selectNode(state, action: PayloadAction<string | undefined>) {
      const id = action.payload;
      state.selection = {nodeIds: id ? [id] : [], edgeIds: []};
    },
    addEdge: {
      prepare: (source: string, target: string, label?: string, id?: string) => ({
        payload: {source, target, label, id},
      }),
      reducer(state, action: PayloadAction<{ source: string; target: string; label?: string; id?: string }>) {
        const {source, target, label, id} = action.payload;
        if (source === target) return;
        const exists = state.edges.some((e) => e.source === source && e.target === target);
        if (exists) return;
        // ensure nodes exist
        if (!state.nodes.find((n) => n.id === source)) return;
        if (!state.nodes.find((n) => n.id === target)) return;
        const edge: EdgeModel = {id: id ?? `edge_${generateRandomId()}`, source, target, label};
        state.edges.push(edge);
        state.selection = {nodeIds: [], edgeIds: [edge.id]};
      },
    },
    deleteSelected(state) {
      const selectedNodeIdsToDelete = new Set(state.selection.nodeIds);
      const selectedEdgeIdsToDelete = new Set(state.selection.edgeIds);
      if (selectedNodeIdsToDelete.size > 0) {
        state.nodes = state.nodes.filter((n) => !selectedNodeIdsToDelete.has(n.id));
        state.edges = state.edges.filter((e) => !selectedNodeIdsToDelete.has(e.source) && !selectedNodeIdsToDelete.has(e.target));
      }
      if (selectedEdgeIdsToDelete.size > 0) {
        state.edges = state.edges.filter((e) => !selectedEdgeIdsToDelete.has(e.id));
      }
      state.selection = {nodeIds: [], edgeIds: []};
    },
    setToolMode(state, action: PayloadAction<UIState['toolMode']>) {
      state.ui.toolMode = action.payload;
      if (action.payload !== 'connect') state.ui.pendingConnectionFrom = undefined;
    },
    startConnectionFrom(state, action: PayloadAction<string>) {
      state.ui.toolMode = 'connect';
      state.ui.pendingConnectionFrom = action.payload;
    },
    completeConnectionTo(state, action: PayloadAction<string>) {
      const from = state.ui.pendingConnectionFrom;
      const to = action.payload;
      if (from && to && from !== to) {
        const exists = state.edges.some((e) => e.source === from && e.target === to);
        if (!exists) state.edges.push({id: `edge_${generateRandomId()}`, source: from, target: to});
      }
      state.ui.toolMode = 'select';
      state.ui.pendingConnectionFrom = undefined;
    },
    // Hover state
    setHoveredNode(state, action: PayloadAction<string | undefined>) {
      state.ui.hoveredNodeId = action.payload;
    },
    setHoveredEdge(state, action: PayloadAction<string | undefined>) {
      state.ui.hoveredEdgeId = action.payload;
    },
    // Import/validation status
    setImportErrors(state, action: PayloadAction<string[] | null>) {
      state.ui.importErrors = action.payload;
    },
    setLastError(state, action: PayloadAction<{ message: string; details?: string } | undefined>) {
      state.ui.lastError = action.payload;
    },
    // Box selection (scaffolding for future feature)
    startBoxSelect(state, action: PayloadAction<{ x: number; y: number }>) {
      const {x, y} = action.payload;
      state.ui.selectionBox = {x1: x, y1: y, x2: x, y2: y};
    },
    updateBoxSelect(state, action: PayloadAction<{ x: number; y: number }>) {
      if (!state.ui.selectionBox) return;
      state.ui.selectionBox.x2 = action.payload.x;
      state.ui.selectionBox.y2 = action.payload.y;
    },
    commitBoxSelect(state) {
      // Minimal commit: clear the box for now; selection behavior can be added later.
      state.ui.selectionBox = undefined;
    },
    // Editing node id (for inspector or coordinated edit states)
    setEditingNodeId(state, action: PayloadAction<string | undefined>) {
      state.ui.editingNodeId = action.payload;
    },
    selectEdge(state, action: PayloadAction<string | undefined>) {
      const id = action.payload;
      state.selection = {nodeIds: [], edgeIds: id ? [id] : []};
    },
    clearSelection(state) {
      state.selection = {nodeIds: [], edgeIds: []};
    },
    loadDiagram(state, action: PayloadAction<{ nodes: NodeModel[]; edges: EdgeModel[] }>) {
      state.nodes = action.payload.nodes;
      state.edges = action.payload.edges;
      state.selection = {nodeIds: [], edgeIds: []};
      state.ui.pendingConnectionFrom = undefined;
    },
  },
});

function getDefaultLabel(type: NodeType): string {
  switch (type) {
    case 'start':
      return 'Start';
    case 'task':
      return 'Task';
    case 'end':
      return 'End';
  }
}

function generateRandomId(): string {
  // Fallback if crypto not available (SSR-safe):
  if (typeof crypto !== 'undefined' && 'getRandomValues' in crypto) {
    const buf = new Uint32Array(2);
    crypto.getRandomValues(buf);
    return Array.from(buf)
        .map((n) => n.toString(36))
        .join('')
        .slice(0, 8);
  }
  return Math.random().toString(36).slice(2, 10);
}

export const {
  addNode,
  moveNode,
  setNodeLabel,
  selectNode,
  addEdge,
  deleteSelected,
  setToolMode,
  startConnectionFrom,
  completeConnectionTo,
  setHoveredNode,
  setHoveredEdge,
  setImportErrors,
  setLastError,
  startBoxSelect,
  updateBoxSelect,
  commitBoxSelect,
  setEditingNodeId,
  selectEdge,
  clearSelection,
  loadDiagram,
} = slice.actions;

export default slice.reducer;
