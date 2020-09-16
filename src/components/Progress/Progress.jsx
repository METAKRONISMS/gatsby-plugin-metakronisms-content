import React from 'react';
import PropTypes from 'prop-types';

import { createUseStyles, useTheme } from 'react-jss';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({
  root: {
    border: '1px solid currentColor',
    padding: 1,
    flexGrow: 1,
  },
  bar: ({ min, max }) => ({
    height: '100%',
    minHeight: '1ch',
    backgroundColor: 'currentColor',
    width: `${Math.max(0, Math.min(min / max, 1)) * 100}%`,
  }),
}), {
  name: 'Progress',
});

const Progress = ({
  min,
  max,
  className,
  classes: baseClasses,
}) => {
  const theme = useTheme();
  const classes = {
    ...useStyles({ theme, min, max }),
    ...(baseClasses || {}),
  };
  return (
    <div className={[classes.root, className].filter(Boolean).join(' ')}>
      <div className={classes.bar} />
    </div>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string),
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

Progress.defaultProps = {
  className: null,
  classes: null,
};

export default Progress;
