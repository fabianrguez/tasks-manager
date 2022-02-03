import propTypes from 'prop-types';

export function Icon({ name }) {
  // const { isLoading, Svg: SvgIcon } = useDynamicSvgImport(name);

  return <StyledIconWrapper icon={name}></StyledIconWrapper>;
}

Icon.propTypes = {
  name: propTypes.oneOf(['date']),
};
