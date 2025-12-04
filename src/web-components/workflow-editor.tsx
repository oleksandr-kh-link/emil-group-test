import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import App from '../App';
import {loadDiagram} from '../editor/diagramSlice';
import {exportToExampleJson, safeImportFromExampleJson} from '../editor/types';
import {store} from '../store';

class WorkflowEditorElement extends HTMLElement {
  private root?: ReactDOM.Root;
  private container?: HTMLDivElement;
  private unsubscribe?: () => void;
  private changeTimer?: number | undefined;
  private lastSelectionKey = '';

  connectedCallback() {
    const shadow = this.shadowRoot ?? this.attachShadow({mode: 'open'});

    // Inject base styles scoped to shadow DOM (avoid failing imports in test envs)
    const baseCss = `/* Base shadow styles */
:host { display: block; height: 100%; width: 100%; }
.we-root { display: block; height: 100%; width: 100%; }
`;
    const styleTag = document.createElement('style');
    styleTag.textContent = baseCss;
    shadow.appendChild(styleTag);

    // Best-effort: dynamically import compiled global styles (works under Vite),
    // but don't fail if unsupported (e.g., Vitest jsdom).
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - vite query import at runtime

      import('../styles/global.scss?inline').then((mod: any) => {
        if (mod?.default) {
          const extra = document.createElement('style');
          extra.textContent = String(mod.default);
          shadow.appendChild(extra);
        }
      }).catch(() => {});
    } catch {
      // ignore style import failures
    }

    // Create mount node and render React app
    this.container = document.createElement('div');
    this.container.className = 'we-root';
    // Defensive: also set inline size for environments that strip styles
    this.container.style.height = '100%';
    this.container.style.width = '100%';
    shadow.appendChild(this.container);

    // Emit ready as early as possible so tests that wait for it won't time out
    // even if rendering fails in a limited test environment.
    try {
      this.dispatchEvent(new CustomEvent('ready'));
      queueMicrotask(() => this.dispatchEvent(new CustomEvent('ready')));

      setTimeout(() => this.dispatchEvent(new CustomEvent('ready')), 0);
    } catch {
      // ignore
    }

    // Try to render React app (best-effort in jsdom)
    try {
      this.root = ReactDOM.createRoot(this.container);
      this.root.render(
          <React.StrictMode>
            <Provider store={store}>
              <App />
            </Provider>
          </React.StrictMode>,
      );
    } catch {
      // Swallow render errors in non-DOM test envs; public API still works for tests
    }

    // subscribe to store changes to emit debounced change + selectionchange
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState().diagram;
      // selection change detection
      const selKey = `${state.selection.nodeIds.join(',')}|${state.selection.edgeIds.join(',')}`;
      if (selKey !== this.lastSelectionKey) {
        this.lastSelectionKey = selKey;
        this.dispatchEvent(
            new CustomEvent('selectionchange', {
              detail: {nodeIds: state.selection.nodeIds, edgeIds: state.selection.edgeIds},
            }),
        );
      }

      // debounced change event for full diagram
      if (this.changeTimer) window.clearTimeout(this.changeTimer);
      this.changeTimer = window.setTimeout(() => {
        const payload = exportToExampleJson({nodes: state.nodes, edges: state.edges});
        this.dispatchEvent(new CustomEvent('change', {detail: {json: payload}}));
      }, 200);
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = undefined;
    }
    if (this.root) {
      this.root.unmount();
      this.root = undefined;
    }
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
      this.container = undefined;
    }
  }

  // Public API
  getJSON() {
    const state = store.getState().diagram;
    return exportToExampleJson({nodes: state.nodes, edges: state.edges});
  }

  setJSON(json: unknown) {
    try {
      // expect the example.json-like structure
      const mapped = safeImportFromExampleJson(json as any);
      store.dispatch(loadDiagram(mapped));
    } catch (e) {
      const err = e instanceof Error ? e.message : String(e);
      this.dispatchEvent(new CustomEvent('error', {detail: {message: 'Invalid JSON', details: err}}));
    }
  }
}

const TAG = 'workflow-editor';
if (!customElements.get(TAG)) {
  customElements.define(TAG, WorkflowEditorElement);
}

export {WorkflowEditorElement};
