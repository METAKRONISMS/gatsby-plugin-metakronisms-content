import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import Card from '../Card/Card';
import { withSlides } from './Context';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

const Slide = ({
  children,
  className,
  duration,
  nextSlide,
}) => {
  const [time, setTime] = React.useState(0);
  const theme = useTheme();
  const classes = useStyles({ theme });

  React.useEffect(() => {
    if (!duration) return () => { };

    const timeout = setTimeout(() => {
      if (nextSlide) nextSlide();
    }, duration);

    return () => clearTimeout(timeout);
  });

  React.useEffect(() => {
    const timer = setInterval((elapsed) => {
      setTime((prev) => prev + (elapsed || 100));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const classNames = [
    className,
    classes.root,
  ].filter(Boolean).join(' ');

  return (
    <Card className={classNames}>
      {children}
      {!!duration && <div><progress max={duration} value={time} /></div>}
    </Card>
  );
};

Slide.displayName = 'MKSlide';

Slide.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  duration: PropTypes.number,
  nextSlide: PropTypes.func.isRequired,
};

Slide.defaultProps = {
  className: null,
  children: null,
  duration: 3000,
};

export default Slide;

export const WithSlides = withSlides(Slide);
