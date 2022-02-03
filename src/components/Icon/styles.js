import styled from 'styled-components';

export const StyledIconWrapper = styled.span`
  background-image: url(${({ icon }) => require(`assets/icons/${icon}.svg`)});
  background-position: center;
  height: 21px;
  width: 21px;
`;
