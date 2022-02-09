import { StyledTextAreaWrapper } from './styles';

export function TextArea({ placeholder, rows = 5, name = '', ...rest }) {
  return (
    <StyledTextAreaWrapper>
      <textarea placeholder={placeholder} rows={rows} name={name} {...rest} />
      <label>{placeholder}</label>
    </StyledTextAreaWrapper>
  );
}
