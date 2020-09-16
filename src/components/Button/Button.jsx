import React from 'react';
import PropTypes from 'prop-types';

import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: ({
    // anim,
    hidden,
    disabled,
    color,
  }) => {
    const returned = {
      ...theme.mixins.button,
      opacity: hidden ? 0 : 1,
      cursor: disabled ? 'normal' : 'pointer',
      pointerEvents: disabled || hidden ? 'none' : 'all',
    };
    returned.color = disabled
      ? theme.palette[color].textDisabled
      : theme.palette[color].textContrast;
    returned.backgroundColor = disabled
      ? theme.palette[color].disabled
      : theme.palette[color].main;
    return returned;
  },
}), {
  name: 'Button',
});

const Button = ({
  children,
  className,
  hidden,
  anim,
  type,
  classes: baseClasses,
  ...props
}) => {
  const theme = useTheme();
  const classes = {
    ...useStyles({
      ...props,
      hidden,
      anim,
      theme,
    }),
    ...(baseClasses || {}),
  };

  // if the anim,

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={[
        classes.root,
        className,
        hidden && classes.hidden,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  anim: PropTypes.oneOf(['in', 'out']),
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
};

Button.defaultProps = {
  classes: null,
  type: 'button',
  children: null,
  className: null,
  color: 'primary',
  disabled: false,
  anim: null,
  hidden: false,
};

export default Button;
