import {useEffect} from 'react';

export function useKeyboardShortcuts(options: { onDelete?: () => void }) {
  const {onDelete} = options;

  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      if ((ev.key === 'Delete' || ev.key === 'Backspace') && onDelete) {
        onDelete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onDelete]);
}
