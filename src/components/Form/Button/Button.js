import { StyledButton } from './styles';

export function Button({ onClick = () => {}, children, ...rest }) {
  const handleOnClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <StyledButton {...rest} onClick={handleOnClick}>
      {children}
    </StyledButton>
  );
}
