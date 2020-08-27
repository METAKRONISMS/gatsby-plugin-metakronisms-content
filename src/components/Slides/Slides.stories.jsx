/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Slides from './Slides';
import { WithSlides as Slide } from './Slides.Slide';
import { WithSlides as TypistSlide } from './Slides.TypistSlide';

const Anim1Slide = (props) => (<Slide {...props} />);

export default {
  title: 'Components/Slides',
  component: Slides,
  argTypes: {
    getStepInfo: { action: 'getStepInfo' },
    makeStep: { action: 'getStepInfo' },
  },
};

export const Basic = (args) => (
  <Slides
    getStepInfo={(...a) => {
      args.getStepInfo(...a);
      return {
        title: 'Step title',
        choices: [],
      };
    }}
    makeStep={args.makeStep}
  >
    {args.children}
  </Slides>
);

Basic.args = {
  children: [
    <Slide key="a">
      Slide
    </Slide>,
    <TypistSlide key="b">
      TypistSlide
    </TypistSlide>,
    <Anim1Slide key="c">
      Anim1Slide
    </Anim1Slide>,
  ],
};
