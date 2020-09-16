import React from 'react';
import PropTypes from 'prop-types';

import { useSlides } from './Context';
import { useEpisode } from '../Episode/Context';

import Button from '../Button';

const ControlButton = ({
  prev,
  children,
  hidden,
}) => {
  const {
    prevSlide,
    nextSlide,
    slidesCount,
    currentSlide,
  } = useSlides();
  const {
    setStepProgress,
  } = useEpisode();

  const handleClick = () => {
    if (prev) {
      prevSlide();
      setStepProgress((currentSlide - 1) / slidesCount);
    } else {
      nextSlide();
      setStepProgress((currentSlide + 1) / slidesCount);
    }
  };

  return <Button hidden={hidden} onClick={handleClick}>{children}</Button>;
};

ControlButton.propTypes = {
  prev: PropTypes.bool,
  children: PropTypes.node,
  hidden: PropTypes.bool,
};

ControlButton.defaultProps = {
  prev: false,
  children: null,
  hidden: false,
};

export const PrevButton = ({ hidden }) => (
  <ControlButton hidden={hidden} prev>
    Back
  </ControlButton>
);

PrevButton.propTypes = {
  hidden: PropTypes.bool,
};

PrevButton.defaultProps = {
  hidden: false,
};

export const NextButton = ({ hidden }) => (
  <ControlButton hidden={hidden}>
    Continue
  </ControlButton>
);

NextButton.propTypes = {
  hidden: PropTypes.bool,
};

NextButton.defaultProps = {
  hidden: false,
};

export default ControlButton;
