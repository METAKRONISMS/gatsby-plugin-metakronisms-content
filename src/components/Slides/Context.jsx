import React from 'react';

export const defaultSlides = {
  currentSlide: 0,
  slidesCount: 0,
  prevSlide: () => {},
  nextSlide: () => {},
};

const SlidesContext = React.createContext({ ...defaultSlides });

SlidesContext.displayName = 'MKSlidesContext';

export default SlidesContext;

export const withSlides = (Comp) => {
  const returned = (props) => (
    <SlidesContext.Consumer>
      {(ctx) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Comp {...{ ...props, ...defaultSlides, ...ctx }} />
      )}
    </SlidesContext.Consumer>
  );
  returned.displayName = `withSlides(${Comp.displayName || Comp.name})`;
  return returned;
};
