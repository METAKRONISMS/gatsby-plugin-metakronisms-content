import React from 'react';
import PropTypes from 'prop-types';
import { withSlides } from './Context';
import Button from '../Button';

const ControlButton = withSlides(({
  prev,
  prevSlide,
  nextSlide,
  children,
  hide,
}) => {
  const handleClick = () => {
    if (prev) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  return <Button hide={hide} onClick={handleClick}>{children}</Button>;
});

ControlButton.propTypes = {
  prev: PropTypes.bool,
  slidesCount: PropTypes.number,
  currentSlide: PropTypes.number,
  prevSlide: PropTypes.func,
  nextSlide: PropTypes.func,
  children: PropTypes.node,
  text: PropTypes.node,
  hide: PropTypes.bool,
};

ControlButton.defaultProps = {
  prev: false,
  children: null,
  text: null,
  hide: false,
};

export const PrevButton = ({ hide }) => (
  <ControlButton hide={hide} prev>
    Back
  </ControlButton>
);

PrevButton.propTypes = {
  hide: PropTypes.bool,
};

PrevButton.defaultProps = {
  hide: false,
};

export const NextButton = ({ hide }) => (
  <ControlButton hide={hide}>
    Continue
  </ControlButton>
);

NextButton.propTypes = {
  hide: PropTypes.bool,
};

NextButton.defaultProps = {
  hide: false,
};

export default ControlButton;
