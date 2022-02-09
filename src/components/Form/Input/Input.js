import { StyledInputWrapper } from './styles';

export function Input({ type = 'text', placeholder, name = '', ...rest }) {
  return (
    <StyledInputWrapper>
      <input type={type} placeholder={placeholder} name={name} {...rest} />
      {placeholder && <label>{placeholder}</label>}
    </StyledInputWrapper>
  );
}
