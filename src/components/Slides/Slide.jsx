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
  // duration,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const classNames = [
    className,
    classes.root,
  ].filter(Boolean).join(' ');

  return (
    <Card className={classNames}>
      {children}
    </Card>
  );
};

Slide.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  // duration: PropTypes.number,
};

Slide.defaultProps = {
  className: null,
  children: null,
  // duration: 3000,
};

export default Slide;

export const WithSlides = withSlides(Slide);
