import React from 'react';

import ErrorBoundary from './editor/components/ErrorBoundary';
import Editor from './editor/Editor';

export default function App() {
  return (
    <ErrorBoundary>
      <Editor />
    </ErrorBoundary>
  );
}
