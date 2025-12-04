import React, {memo} from 'react';

interface ExportModalProps {
  show: boolean
  text: string
  onClose: () => void
}

function ExportModalImpl({show, text, onClose}: ExportModalProps) {
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
          <strong style={{flex: 1}}>Exported JSON</strong>
          <button
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(text);
                alert('Copied JSON to clipboard');
              } catch {
                alert('Clipboard unavailable');
              }
            }}
          >
            Copy
          </button>
          <button onClick={onClose}>Close</button>
        </div>
        <div style={{padding: '0 12px 12px 12px', flex: 1}}>
          <div style={{fontSize: 12, color: '#9ca3af', margin: '0 0 6px 2px'}}>
            Format matches example.json with inline x/y positions for nodes.
          </div>
          <textarea
            readOnly
            value={text}
            spellCheck={false}
            style={{
              width: '100%',
              height: '100%',
              resize: 'none',
              background: 'rgba(255,255,255,0.06)',
              color: '#e5e7eb',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 8,
              padding: 12,
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              fontSize: 12,
              lineHeight: 1.5,
            }}
          />
        </div>
      </div>
    </div>
  );
}
const ExportModal = memo(ExportModalImpl);
export default ExportModal;
