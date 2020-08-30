/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { ThemeProvider } from 'react-jss';
import Slides from './Slides';
import { WithSlides as Slide } from './Slide';
// import { WithSlides as TypistSlide } from './Slides.TypistSlide';

const Anim1Slide = (props) => (<Slide {...props} />);

export default {
  title: 'Components/Slides',
  component: Slides,
  argTypes: {
    getStepInfo: { action: 'getStepInfo' },
    makeStep: { action: 'getStepInfo' },
    children: { control: false },
  },
};

export const Basic = (args) => (
  <ThemeProvider theme={{}}>
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
  </ThemeProvider>
);

Basic.args = {
  children: [
    <Slide key="a">
      Slide
    </Slide>,
    <Anim1Slide key="c">
      Anim1Slide
    </Anim1Slide>,
  ],
};
