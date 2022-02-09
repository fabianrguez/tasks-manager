import { StyledButton } from './styles';

export function Button({ onClick = () => {}, children }) {
  const handleOnClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  return <StyledButton onClick={handleOnClick}>{children}</StyledButton>;
}
