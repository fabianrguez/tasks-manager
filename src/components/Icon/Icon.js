import propTypes from 'prop-types';
import { StyledIconWrapper } from './styles';
export function Icon({ name }) {

  return <StyledIconWrapper icon={name}></StyledIconWrapper>;
}

Icon.propTypes = {
  name: propTypes.oneOf(['date']),
};
