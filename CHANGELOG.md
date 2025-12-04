### v1.0.0 – Workflow Editor (Web Component)

Initial public release of the custom, React-based workflow editor packaged as a reusable Web Component `<workflow-editor>`.

Features
- Nodes: Start, Task, End
- Interactions: select, drag/move, connect nodes with arrows, delete nodes/edges (node deletion cleans up attached edges)
- Edit: inline Task label editing (double-click → edit, Enter to save, Esc to cancel)
- Import/Export: JSON matching `example.json` structure (with inline `x/y` node positions)
- Packaging: ES and IIFE bundles for embeddable Web Component

Behavior and UX
- Edges anchor to node borders and avoid overlapping other nodes
- Edges are selectable and deletable; smaller arrowheads for clarity
- Keyboard support: Tab focus, Enter/Space select, Delete/Backspace delete
- Export JSON popup with copy-to-clipboard

Developer Experience
- TypeScript + Redux Toolkit state management
- Geometry/routing utilities extracted into pure helpers
- ESLint (Google style), Vitest tests (reducers, geometry, components, round-trip)

Known limitations
- No zoom or history/undo
- Minimal custom router; detours may be longer in dense diagrams
- Supported node types limited to Start/Task/End

Notes
- Shadow DOM styling; ensure the element is given height/width in the host layout
- Vite build includes shims for `process.env` and `global` to run in the browser
