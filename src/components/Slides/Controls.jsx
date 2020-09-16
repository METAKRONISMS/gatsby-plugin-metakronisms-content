import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';

import { useSlides } from './Context';

import { PrevButton, NextButton } from './ControlButton';
import Progress from '../Progress/Progress';

export const defaultComponents = {
  Progress,
  PrevButton,
  NextButton,
};

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  buttonWrapper: {},
  progress: {
    minWidth: 100,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'column',
  },
}), {
  name: 'Controls',
});

const Controls = ({
  className,
  components: {
    Progress: ProgressComp = Progress,
    PrevButton: PrevButtonComp = PrevButton,
    NextButton: NextButtonComp = NextButton,
  } = defaultComponents,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const {
    slidesCount,
    currentSlide,
  } = useSlides();

  return (
    <div
      className={[classes.root, className].filter(Boolean).join(' ')}
    >
      <div className={classes.buttonWrapper}>
        <PrevButtonComp hidden={currentSlide < 1 || slidesCount < 2} />
      </div>

      <div className={classes.progress}>
        <ProgressComp min={currentSlide} max={slidesCount - 1} />
      </div>

      <div className={classes.buttonWrapper}>
        <NextButtonComp hidden={currentSlide >= slidesCount} />
      </div>
    </div>
  );
};

Controls.propTypes = {
  className: PropTypes.string,
  components: PropTypes.objectOf(PropTypes.elementType),
};

Controls.defaultProps = {
  className: null,
  components: defaultComponents,
};

export default Controls;
