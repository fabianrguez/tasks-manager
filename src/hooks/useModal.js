import { useState } from 'react';

export function useModal({ initialIsOpen = false }) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const toggle = () => setIsOpen(!isOpen);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  return { isOpen, toggle, close, open };
}
