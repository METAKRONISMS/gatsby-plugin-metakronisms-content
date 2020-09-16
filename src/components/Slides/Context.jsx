import React, { useContext, createContext } from 'react';

export const defaultSlides = {
  currentSlide: 0,
  slidesCount: 0,
  defaultDuration: 0,
};

const SlidesContext = createContext({
  prevSlide: () => { },
  nextSlide: () => { },
  ...defaultSlides,
});

export default SlidesContext;

export const useSlides = () => useContext(SlidesContext);

export const withSlides = (Comp) => (props) => (
  <SlidesContext.Consumer>
    {(ctx) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Comp {...{ ...props, ...ctx }} />
    )}
  </SlidesContext.Consumer>
);
