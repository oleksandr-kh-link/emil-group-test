Workflow Editor (Web Component)

A reusable, embeddable workflow editor implemented with React + TypeScript + Redux and bundled with Vite. It renders inside a Shadow DOM as a Custom Element <workflow-editor> and provides a React Flow–like UX without using any BPMN libraries.

Features (v1)
- Nodes: Start, Task, End
- Interactions: select, drag/move, connect nodes with arrows, delete nodes/edges
- Edit: inline Task label editing
- Import/Export: JSON matching example.json structure (with inline x/y positions)
- Packaging: ES and IIFE bundles for <workflow-editor>

Constraints
- No zoom.
- Obstacle-aware routing can be improved.

Quick Start (development)
- npm install
- npm run dev
Open the local URL (usually http://localhost:5173).

Build Web Component bundles
- npm run build:wc
Outputs under dist/:
- workflow-editor.es.js (ES module bundle)
- workflow-editor.iife.js (self-registering global bundle)

Serve the repo statically and open the examples
- npm run serve:examples (builds fresh bundles, serves on port 5500, and opens examples/es-module.html)

Web Component Usage
IIFE (drop-in)
<script src="/dist/workflow-editor.iife.js"></script>
<workflow-editor id="we"></workflow-editor>
<script>
  const el = document.getElementById('we');
  el.addEventListener('ready', () => {
    el.setJSON({ /* example.json-like payload with inline x/y */ });
  });
  // const current = el.getJSON();
</script>

ES module
<script type="module">
  import '/dist/workflow-editor.es.js';
  const el = document.querySelector('workflow-editor');
  el.addEventListener('ready', () => el.setJSON({ /* json */ }));
</script>
<workflow-editor></workflow-editor>

API Reference
- Methods
  - getJSON(): DiagramJSON — returns the current diagram in example.json shape.
  - setJSON(json: unknown): void — imports a diagram. On validation error, dispatches an error event.
- Events
  - ready — emitted after first render.
  - change — debounced; event.detail.json contains the current diagram JSON.
  - selectionchange — detail: { nodeIds: string[], edgeIds: string[] }.
  - error — detail: { message: string, details?: string } for invalid imports.

Notes
- Shadow DOM encapsulates styles; the element stretches to fill its container. Ensure the element has a size (e.g., height: 100%).
- The bundles include React/Redux and styles.

Troubleshooting
- Component not visible in examples or host app:
  - Ensure the host element has dimensions. For example, set `workflow-editor { display: block; height: 100%; }` and ensure parent containers have a non-zero height.
  - The Web Component internally sets `:host { display: block; height: 100%; width: 100%; }` but parent layout still matters.
- process is not defined:
  - The build defines browser shims for `process.env` and `global` in `vite.config.ts`. If you copy the config, keep the `define` block:
    - `process.env.NODE_ENV: '"production"'`
    - `process.env: '{}'`
    - `global: 'globalThis'`
- Loading examples from file:// path fails:
  - Serve over HTTP. For local testing run `npx serve .` and open `/examples/iife.html` or `/examples/es-module.html`.

Event payload examples
- ready
  - Fired once after initial render. No `detail` payload.
- change
  - Debounced. Payload: `{ json: DiagramJSON }` where `DiagramJSON` matches the `example.json` shape with inline `x/y` for nodes.
  - Example:
    ```js
    el.addEventListener('change', (e) => {
      const json = e.detail.json;
      console.log('nodes:', json.definitions.rootElements[0].flowElements);
    });
    ```
- selectionchange
  - Payload: `{ nodeIds: string[], edgeIds: string[] }`.
- error
  - Fired when `setJSON` receives invalid input. Payload: `{ message: string, details?: string }`.

TypeScript host declaration (optional)
```ts
declare global {
  interface HTMLElementTagNameMap {
    'workflow-editor': HTMLElement & {
      getJSON: () => unknown;
      setJSON: (json: unknown) => void;
    };
  }
}
```

Theming
- The component uses a dark theme by default. SCSS variables are defined in `src/styles/global.scss`:
  - `$bg`, `$panel`, `$text`, `$accent` (focus/selection color).
- Since styles are injected into the Shadow DOM, host pages won’t affect internal styles. To customize, re-build with modified SCSS variables or expose CSS custom properties in a future iteration.

JSON format
- One bpmn:Process inside definitions.rootElements; nodes include inline x/y; edges reference node ids.
- Nodes: $type ∈ bpmn:StartEvent | bpmn:UserTask | bpmn:EndEvent, with id, name?, x, y.
- Edges: $type = bpmn:SequenceFlow, id, sourceRef, targetRef, name?.
Invalid payloads cause setJSON to emit an error event with validation details.

Development
- Lint: npm run lint (Google style via ESLint v9 flat config)
- Type-check: npm run typecheck
- Unit/Component tests: npm run test (Vitest + Testing Library)

End-to-End testing (Playwright)
- Install browsers (one-time): npm run e2e:install
- Run headless E2E tests: npm run test:e2e
- Run headed (with visible browsers): npm run test:e2e:headed

Notes
- The Playwright config (playwright.config.ts) builds the Web Component bundles and serves the repo during tests using:
  - command: npm run build:wc && npx serve . -l 5501
  - baseURL: http://localhost:5501
- E2E specs target examples/es-module.html and interact with controls inside the component’s Shadow DOM. We use the Playwright shadow-piercing selector syntax >>>, e.g. wc.locator('>>> button:has-text("+ Task")').
- Typical flows covered:
  - Ready/change events, add/delete Task via toolbar, JSON assertions via getJSON().
  - Add two Tasks and connect them via the connect handle → node click; assert edge count via getJSON().

Folder structure
- src/editor/: editor module
  - Editor.tsx — canvas shell and toolbar
  - NodeView.tsx — node visuals + inline edit
  - EdgeView.tsx — edges with obstacle-aware routing
  - geometry/ — pure geometry & routing utilities
  - hooks/ — useDragNode, useSvgClientPoint, useKeyboardShortcuts
  - components/ — GridPattern, ExportModal, ErrorBoundary
  - types.ts — data model, import/export, validation helpers
- src/web-components/workflow-editor.tsx — custom element wrapper
- examples/ — IIFE & ES module usage examples

Known limitations
- No zoom.
- Minimal routing; may produce longer detours with dense obstacles.
- Supported node types are limited to Start/Task/End.

License
MIT.

CI (GitHub Actions)
- A workflow is provided at .github/workflows/ci.yml that runs on push and pull requests:
  - npm ci
  - npm run lint
  - npm run typecheck
  - npm run test
  - npm run build:wc
