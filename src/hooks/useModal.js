import { useState } from 'react';

export function useModal({ initialIsOpen = false }) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const toggle = () => setIsOpen(!isOpen);

  return { isOpen, toggle };
}
