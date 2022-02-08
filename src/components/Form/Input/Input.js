import { StyledInputWrapper } from './styles';

export function Input({ type = 'text', placeholder }) {
  return (
    <StyledInputWrapper>
      <input type={type} placeholder={placeholder} />
      {placeholder && <label>{placeholder}</label>}
    </StyledInputWrapper>
  );
}
