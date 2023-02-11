import { PropTypes } from 'prop-types';

const DEFAULT_AS = 'div';

export function DomElement(props) {
  const { as, value, ...restProps } = props;

  const callbacks = {};
  for (const propName in restProps) {
    const propValue = restProps[propName];
    if (typeof propValue === 'function') {
      callbacks[propName] = (...args) => propValue(value, ...args);
    }
  }

  const Component = as || DEFAULT_AS;

  return <Component {...restProps} {...callbacks} />;
}
DomElement.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  value: PropTypes.any,
};
