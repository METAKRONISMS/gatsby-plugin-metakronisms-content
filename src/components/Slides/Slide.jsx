import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import { useSlides } from './Context';

import Progress from '../Progress/Progress';

export const defaultComponents = {
  Progress,
};

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}), { name: 'Slide' });

const Slide = ({
  children,
  className,
  duration,
  showTimeout,
  classes: baseClasses,
  components: {
    Progress: ProgressComp = Progress,
  } = defaultComponents,
}) => {
  const theme = useTheme();
  const classes = {
    ...useStyles({ theme }),
    ...(baseClasses || {}),
  };

  const classNames = [
    className,
    classes.root,
  ].filter(Boolean).join(' ');

  const { nextSlide } = useSlides();
  const [firstDraw] = useState(Date.now());
  useEffect(() => {
    if (!duration) return () => { };
    const interval = setInterval(() => {
      if (firstDraw + duration < Date.now()) {
        clearInterval(interval);
        nextSlide();
      }
    }, 100);
    return () => clearInterval(interval);
  }, [duration, firstDraw, nextSlide]);

  return duration && showTimeout
    ? (
      <div className={classNames}>
        {children}
        <ProgressComp
          min={0}
          max={duration}
          className={classes.progress}
          classes={{
            root: {
              root: classes.progressWrapper,
              bar: classes.progressBar,
            },
          }}
        />
      </div>
    )
    : children;
};

Slide.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  children: PropTypes.node,
  duration: PropTypes.number,
  showTimeout: PropTypes.bool,
  components: PropTypes.objectOf(PropTypes.elementType),
};

Slide.defaultProps = {
  classes: null,
  className: null,
  children: null,
  duration: 3000,
  showTimeout: false,
  components: defaultComponents,
};

export default Slide;
