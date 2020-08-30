import React from 'react';

// import '../Layout/Layout.scss';

import { ThemeProvider } from 'react-jss';
import Graph from './Graph';

import episdoeFixtures from './Episode.stories.fixtures';

export default {
  title: 'Components/Episode/Graph',
  component: Graph,
};

export const Basic = (args) => (
  <ThemeProvider theme={{}}>
    <Graph
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...args}
    />
  </ThemeProvider>
);
Basic.args = { ...episdoeFixtures };

// eslint-disable-next-line react/jsx-props-no-spreading
export const Full = (args) => (<Basic {...args} />);
Full.args = { ...episdoeFixtures, full: true };
