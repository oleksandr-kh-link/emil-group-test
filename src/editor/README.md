# Editor Module

This folder contains the custom, React-based workflow editor that mimics a React Flow–like UX without using external BPMN libraries.

## Architecture Overview

- Rendering: React + SVG (no zoom, no history). The editor lives inside the Shadow DOM when embedded as a Web Component.
- State: Redux Toolkit slice in `diagramSlice.ts` manages nodes, edges, selection, and minimal UI state (tool mode).
- Geometry: Pure utility functions in `geometry/` for centers, bounds, anchor points, routing, and collision tests.
- Hooks: Reusable logic in `hooks/` (`useDragNode`, `useSvgClientPoint`, `useKeyboardShortcuts`).
- Components:
  - `Editor.tsx`: Canvas shell, toolbar, import/export, wiring of interactions.
  - `NodeView.tsx`: Renders Start/Task/End, selection, inline edit for Task, and connect handle.
  - `EdgeView.tsx`: Renders edges with border-anchored endpoints and obstacle-avoiding routing.
  - `components/GridPattern.tsx`: Background grid pattern.
  - `components/ExportModal.tsx`: Export JSON popup.

## Data Model

Internal diagram state (`types.ts`):

- Nodes: `{ id, type: 'start'|'task'|'end', position: {x,y}, label? }`
- Edges: `{ id, source, target, label? }`

Import/Export uses an `example.json`-like BPMN structure with inline `x/y` on node entries:

- Nodes map to `$type` of `bpmn:StartEvent`, `bpmn:UserTask`, `bpmn:EndEvent`.
- Edges map to `bpmn:SequenceFlow` with `sourceRef` and `targetRef`.

Validation: `safeImportFromExampleJson` verifies required shapes, unique IDs, numeric coordinates, supported types, and reference integrity.

## Interactions

- Select: click node/edge; background click clears selection. Keyboard: Enter/Space on focused entity selects it.
- Drag: press on a node and drag to move it.
- Connect: click a node’s handle to start, then click a different node to complete.
- Edit: double‑click a Task label to edit in place; Enter saves; Escape cancels.
- Delete: Delete/Backspace removes selected nodes/edges (node deletion cleans up attached edges).

## Testing

Vitest + Testing Library:

- Reducers: `__tests__/diagramSlice.test.ts`
- Geometry: `__tests__/geometry.test.ts` (routing, centers/bounds, obstacles)
- Components: `__tests__/components.test.tsx` (selection) and `__tests__/interactions.test.tsx` (inline edit, connection via reducers)
- Round-trip: `__tests__/roundtrip.test.ts` (export→import)

Run: `npm run test`

## Development

- Dev server: `npm run dev`
- Lint: `npm run lint` (Google style via ESLint v9 flat config)
- Type-check: `npm run typecheck`

## Profiling guide (performance)

Use the React Profiler to spot unnecessary renders:

1. Run the app: `npm run dev` and open the app in Chrome.
2. Open React DevTools → Profiler tab.
3. Record while dragging nodes and creating connections.
4. Inspect `NodeView` and `EdgeView` commits. With `React.memo` and stable props, re-renders should be limited to affected nodes/edges.

Hotspots to watch:
- Rebuilding obstacle lists for every edge — mitigated by per-render memoization in `EdgeView`.
- Routing when many obstacles are present — fast paths and AABB pre-filter help avoid expensive checks.

Tips:
- Keep `nodesById` memoized at `Editor` level to avoid reference churn.
- Prefer stable callbacks (`useCallback`) when passing handlers deeply if you notice re-render cascades.

## Accessibility notes

- Keyboard navigation:
  - Tab focuses toolbar buttons, then SVG nodes and edges (they are focusable and have `role="button"`).
  - Enter/Space selects the focused node/edge.
  - Delete/Backspace removes selected node/edge(s).
- Inline label editing:
  - Double-click a Task label to edit.
  - Input autofocuses; Enter commits; Escape cancels; focus returns to the node group.
- Focus visibility:
  - A visible focus ring is applied via `:focus-visible` styles in `src/styles/global.scss`.
