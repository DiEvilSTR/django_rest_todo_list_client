import './Flex.css';

import classnames from 'classnames';
import { PropTypes } from 'prop-types';

import { DomElement } from '/src/components/DomElement';

export const ALIGN = {
  center: 'center',
  end: 'end',
  start: 'start',
};

export const JUSTIFY = {
  center: 'center',
  end: 'end',
  spaceAround: 'spaceAround',
  spaceBetween: 'spaceBetween',
  spaceEvenly: 'spaceEvenly',
  start: 'start',
};

export function Flex(props) {
  const { align, className: _className, grow, inline, justify, noWrap, vertical, ...restProps } = props;

  const className = classnames(_className, 'flex', {
    'flex--grow': grow,
    'flex--inline': inline,
    'flex--nowrap': noWrap || vertical,
    'flex--vertical': vertical,

    'flex-align--center': align === ALIGN.center,
    'flex-align--end': align === ALIGN.end,
    'flex-align--start': align === ALIGN.start,

    'flex-justify--center': justify === JUSTIFY.center,
    'flex-justify--end': justify === JUSTIFY.end,
    'flex-justify--space_round': justify === JUSTIFY.spaceAround,
    'flex-justify--space_between': justify === JUSTIFY.spaceBetween,
    'flex-justify--space_evenly': justify === JUSTIFY.spaceEvenly,
    'flex-justify--start': justify === JUSTIFY.start,
  });

  return <DomElement {...restProps} className={className} />;
}
Flex.propTypes = {
  align: PropTypes.oneOf(Object.values(ALIGN)),
  className: PropTypes.string,
  grow: PropTypes.bool,
  inline: PropTypes.bool,
  justify: PropTypes.oneOf(Object.values(JUSTIFY)),
  noWrap: PropTypes.bool,
  vertical: PropTypes.bool,
};
