import { useModal } from 'hooks';
import { useImperativeHandle, forwardRef, useState } from 'react';
import { X } from 'react-feather';
import {
  StyledModalCloseButton,
  StyledModalContent,
  StyledModalDialog,
  StyledModalTitle,
  StyledModalWrapper,
  StyledModalFooter,
  StyledModalRow,
} from './styles';

export const Modal = forwardRef(({ initialIsOpen = false, title, children, onCloseModal = () => {} }, ref) => {
  const { isOpen, close, open } = useModal({ initialIsOpen });
  const [isDialogVisible, setIsDialogVisible] = useState(initialIsOpen);

  const handleCloseModal = (e) => {
    e.preventDefault();
    toggleModal();
    onCloseModal();
  };

  const toggleModal = () => {
    if (isOpen) {
      setIsDialogVisible(false);
    } else {
      open();
      setIsDialogVisible(true);
    }
  };

  const handleDialogTransitionEnd = () => {
    if (!isDialogVisible) {
      close();
    }
  };

  useImperativeHandle(ref, () => ({
    toggleModal,
  }));

  return (
    <StyledModalWrapper isOpen={isOpen}>
      <StyledModalDialog
        role="dialog"
        aria-modal="true"
        isVisible={isDialogVisible}
        onTransitionEnd={handleDialogTransitionEnd}
      >
        <StyledModalTitle>{title}</StyledModalTitle>
        <StyledModalCloseButton onClick={handleCloseModal} aria-label="Close" title="Close">
          <X />
        </StyledModalCloseButton>
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModalDialog>
    </StyledModalWrapper>
  );
});

Modal.Footer = StyledModalFooter;
Modal.Row = StyledModalRow;
