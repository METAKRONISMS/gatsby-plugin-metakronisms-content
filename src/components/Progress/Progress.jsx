import React from 'react';
import PropTypes from 'prop-types';

import { createUseStyles, useTheme } from 'react-jss';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

const Progress = ({ min, max, className }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={[classes.root, className].filter(Boolean).join(' ')}>
      <div
        style={{
          width: `${Math.max(0, Math.min(min / max, 1)) * 100}%`,
        }}
        className={classes.bar}
      />
    </div>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

Progress.defaultProps = {
  className: null,
};

export default Progress;
