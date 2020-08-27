import React from 'react';

// import '../Layout/Layout.scss';

import Graph from './Graph';

import episdoeFixtures from './Episode.stories.fixtures';

export default {
  title: 'Components/Episode/Graph',
  component: Graph,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Default = (args) => (<Graph {...args} />);
Default.args = { ...episdoeFixtures };

// eslint-disable-next-line react/jsx-props-no-spreading
export const Full = (args) => (<Graph {...args} />);
Full.args = { ...episdoeFixtures, full: true };
