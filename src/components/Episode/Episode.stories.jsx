/* eslint-disable react/jsx-props-no-spreading, react/prop-types */
import React from 'react';

import Episode from './Episode';
import Slides from '../Slides/Slides';
import Slide from '../Slides/Slide';

import { base as baseFixture } from './Episode.stories.fixtures';

export default {
  title: 'Components/Episode',
  component: Episode,
  args: {
    ...baseFixture,
  },
  argTypes: {
    pageContext: { control: { disable: true } },
    data: { control: { disable: true } },
  },
};

export const Basic = (args) => (
  <Episode
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...args}
    components={{
      Slides,
      Slide,
    }}
  />
);
Basic.args = {};
