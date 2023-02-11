import './Container.css';

import MUIContainer from '@mui/material/Container';
import classnames from 'classnames';
import { PropTypes } from 'prop-types';

export function Container(props) {
  const { className: _className, dark, ...restProps } = props;

  const className = classnames(_className, 'container', {
    'container--dark': dark,
  });

  return <MUIContainer {...restProps} className={className} />;
}
Container.propTypes = {
  className: PropTypes.string,
  dark: PropTypes.bool,
};
