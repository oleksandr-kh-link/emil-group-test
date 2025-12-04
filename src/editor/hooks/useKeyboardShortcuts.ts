import {useEffect} from 'react';

function isEditableTarget(target: EventTarget | null): boolean {
  const element = target as HTMLElement | null;
  if (!element) return false;
  const tagNameLower = element.tagName?.toLowerCase();
  if (tagNameLower === 'input' || tagNameLower === 'textarea' || tagNameLower === 'select') return true;
  if (element.isContentEditable) return true;
  if (typeof element.closest === 'function' && element.closest('[contenteditable="true"]')) return true;
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
