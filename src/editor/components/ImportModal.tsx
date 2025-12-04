import React, {memo, useEffect, useRef, useState} from 'react';

interface ImportModalProps {
  show: boolean
  initialText?: string
  onImport: (text: string) => void
  onClose: () => void
}

function ImportModalImpl({show, initialText = '', onImport, onClose}: ImportModalProps) {
  const [text, setText] = useState(initialText);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (show) {
      setText(initialText);
      // Focus after open
      setTimeout(() => textareaRef.current?.focus(), 0);
    }
  }, [show, initialText]);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: 'min(800px, 90vw)',
          height: 'min(520px, 80vh)',
          background: 'rgba(17,24,39,0.98)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 12,
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8}}>
          <strong style={{flex: 1}}>Import JSON</strong>
          <button onClick={() => onClose()}>Close</button>
        </div>
        <div style={{padding: '0 12px 12px 12px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
          <div style={{fontSize: 12, color: '#9ca3af', margin: '0 0 2px 2px'}}>
            Paste your workflow JSON (example.json shape with inline x/y) and press Import.
          </div>
          <textarea
            ref={textareaRef}
            aria-label="Workflow JSON"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            spellCheck={false}
            style={{
              width: '100%',
              height: '100%',
              resize: 'vertical',
              background: 'rgba(255,255,255,0.06)',
              color: '#e5e7eb',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 8,
              padding: 12,
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              fontSize: 12,
              lineHeight: 1.5,
              flex: 1,
              minHeight: 120,
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') onClose();
              if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'enter') onImport(text);
            }}
          />
          <div style={{display: 'flex', gap: 8, justifyContent: 'flex-end'}}>
            <button onClick={() => onImport(text)} aria-label="Import JSON">Import</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const ImportModal = memo(ImportModalImpl);
export default ImportModal;
