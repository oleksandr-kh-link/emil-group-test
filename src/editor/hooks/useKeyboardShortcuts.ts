import {useEffect} from 'react';

function isEditableTarget(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName?.toLowerCase();
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return true;
  if (el.isContentEditable) return true;
  if (typeof el.closest === 'function' && el.closest('[contenteditable="true"]')) return true;
  return false;
}

export function useKeyboardShortcuts(options: { onDelete?: () => void }) {
  const {onDelete} = options;

  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      // Do not trigger delete when typing in an editable field
      if (isEditableTarget(ev.target)) return;
      if ((ev.key === 'Delete' || ev.key === 'Backspace') && onDelete) {
        ev.preventDefault();
        onDelete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onDelete]);
}
