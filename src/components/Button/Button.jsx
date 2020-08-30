import React from 'react';
import PropTypes from 'prop-types';

import { createUseStyles, useTheme } from 'react-jss';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

const Button = ({
  children,
  className,
  hide,
  ...rest
}) => {
  const theme = useTheme();
  const classes = useStyles({ ...rest, theme });
  return (
    <button
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      className={[
        classes.root,
        className,
        hide && classes.hide,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hide: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  className: null,
  hide: false,
};

export default Button;
