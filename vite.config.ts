import {resolve} from 'path';

import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const isWc = mode === 'wc';
  return {
    plugins: [react()],
    // Define shims for browser builds to avoid "process is not defined" and similar globals
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env': '{}',
      'global': 'globalThis',
    },
    build: isWc ?
      {
        lib: {
          entry: resolve(__dirname, 'src/web-components/workflow-editor.tsx'),
          name: 'WorkflowEditor',
          fileName: (format) => `workflow-editor.${format}.js`,
          formats: ['es', 'iife'],
        },
        rollupOptions: {
          // Bundle all deps for the IIFE build to make it drop-in embeddable
          // No externals to keep consumer setup minimal
        },
        sourcemap: true,
      } :
      undefined,
  };
});
