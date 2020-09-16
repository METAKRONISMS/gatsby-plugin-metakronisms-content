/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { ThemeProvider } from 'react-jss';
import Slides from './Slides';
import Slide from './Slide';
import { useSlides } from './Context';

const Anim1Slide = (props) => (<Slide {...props} />);

export default {
  title: 'Components/Slides',
  component: Slides,
  args: {
    defaultDuration: 0,
  },
  argTypes: {
    children: { control: { disable: true } },
  },
};

export const Basic = (args) => (
  <ThemeProvider theme={{}}>
    <Slides
      getStepInfo={(...a) => {
        args.getStepInfo(...a);
        return {
          title: 'Step title',
          choices: [
            {
              title: 'title',
              name: 'name',
              target: 'yo',
            },
            {
              title: 'title',
              name: 'name',
              target: 'yoyo',
            },
          ],
        };
      }}
      makeStep={args.makeStep}
    >
      {args.children}
    </Slides>
  </ThemeProvider>
);

const Next = () => {
  const { nextSlide } = useSlides();
  return (
    <button type="button" onClick={nextSlide}>
      next...
    </button>
  );
};

Basic.args = {
  defaultDuration: 0,
  children: [
    <Slide key="a">
      No specified duration
    </Slide>,
    <Slide key="b" duration={500}>
      500ms duration
    </Slide>,
    <Anim1Slide key="c">
      Anim1Slide
    </Anim1Slide>,
    <Slide key="b" duration={0}>
      0 duration
      <Next />
    </Slide>,
    <Slide key="b" duration={20000}>
      20s duration
    </Slide>,
  ],
};

export const DefaultDuration = (args) => (<Basic {...args} />);
DefaultDuration.args = { ...Basic.args, defaultDuration: 6000 };
