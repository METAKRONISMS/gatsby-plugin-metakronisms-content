import React from 'react';

import { ThemeProvider } from 'react-jss';
import Episode from './Episode';

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

// eslint-disable-next-line react/jsx-props-no-spreading
export const Basic = (args) => (
  <ThemeProvider theme={{}}>
    <Episode
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...args}
    />
  </ThemeProvider>
);
Basic.args = {};
