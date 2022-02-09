import { useModal } from 'hooks';
import { useImperativeHandle, forwardRef } from 'react';
import { X } from 'react-feather';
import {
  StyledModalCloseButton,
  StyledModalContent,
  StyledModalDialog,
  StyledModalTitle,
  StyledModalWrapper,
  StyledModalFooter,
} from './styles';

export const Modal = forwardRef(({ initialIsOpen = false, title, children, onCloseModal = () => {} }, ref) => {
  const { isOpen, toggle } = useModal({ initialIsOpen });

  const handleCloseModal = (e) => {
    e.preventDefault();
    toggle();
    onCloseModal();
  };

  useImperativeHandle(ref, () => ({
    toggleModal: () => toggle(),
  }));

  return (
    <StyledModalWrapper isOpen={isOpen}>
      <StyledModalDialog role="dialog" aria-modal="true">
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
