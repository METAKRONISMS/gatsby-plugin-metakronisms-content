import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import { withSlides } from './Context';
import { PrevButton, NextButton } from './ControlButton';

import Progress from '../Progress/Progress';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

const Controls = withSlides(({
  slidesCount,
  currentSlide,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.root}>
      <div className={classes.buttonWrapper}>
        <PrevButton hide={currentSlide < 1} />
      </div>
      <div className={classes.progress}>
        <Progress min={currentSlide} max={slidesCount} />
      </div>
      <div className={classes.buttonWrapper}>
        <NextButton hide={currentSlide > slidesCount} />
      </div>
    </div>
  );
});

Controls.propTypes = {
  setStepProgress: PropTypes.func.isRequired,
};

export default Controls;
