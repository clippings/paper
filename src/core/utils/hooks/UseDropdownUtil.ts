import React, { useState, useRef } from 'react';

export default function useDropdown(
  ref: React.MutableRefObject<Element | null>,
  initialState: boolean = false
): { isOpen: boolean; handleOpen: () => void; handleClose: () => void; handleToggle: () => void } {
  const [isOpen, setOpen] = useState(initialState);
  const functionRef = useRef<any>();

  const closeDropdown = event => {
    if (ref?.current !== null && !ref?.current?.contains(event.target)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      document.removeEventListener('click', closeDropdown, true);
      setOpen(false);
    }
  };

  const handleClose = (): void => {
    document.removeEventListener('click', functionRef.current, true);
    setOpen(false);
  };

  const handleOpen = (): void => {
    if (!isOpen) {
      document.removeEventListener('click', functionRef.current, true);
      functionRef.current = closeDropdown;
      document.addEventListener('click', functionRef.current, true);
    }

    setOpen(true);
  };

  const handleToggle = (): void => {
    if (isOpen) {
      handleClose();
      return;
    }

    handleOpen();
  };

  return {
    isOpen,
    handleOpen,
    handleClose,
    handleToggle,
  };
}
