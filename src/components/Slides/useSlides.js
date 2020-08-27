import React from 'react';

export default function useSlides(slidesCount) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 > -1 ? prev - 1 : prev));
  }, []);

  const nextSlide = React.useCallback(() => {
    // important! `<=` allows to show buttons
    setCurrentSlide((prev) => (prev <= slidesCount ? prev + 1 : prev));
  }, [slidesCount]);

  return {
    slidesCount,
    currentSlide,
    prevSlide,
    nextSlide,
  };
}
