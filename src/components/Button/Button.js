import { PropTypes } from 'prop-types';

import { DomElement } from '/src/components/DomElement';

export const BUTTON_TYPE = {
  button: 'button',
  reset: 'reset',
  submit: 'submit',
};

const DEFAULT_AS = 'button';
const DEFAULT_TYPE = BUTTON_TYPE.button;

export function Button(props) {
  const { as: _as, type: _type } = props;

  const as = _as || DEFAULT_AS;
  const type = _type || DEFAULT_TYPE;

  return <DomElement as={as} {...props} type={type} />;
}
Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  type: PropTypes.oneOf(Object.values(BUTTON_TYPE)),
};
