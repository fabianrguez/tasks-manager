import { X } from 'react-feather';
import {
  StyledModalCloseButton,
  StyledModalContent,
  StyledModalDialog,
  StyledModalTitle,
  StyledModalWrapper
} from './styles';

export function Modal({ isOpen, title, children, onCloseModal }) {
  const handleCloseModal = (e) => {
    e.preventDefault();
    onCloseModal();
  };

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
}
