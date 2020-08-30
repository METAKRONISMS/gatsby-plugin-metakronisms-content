import React from 'react';

// import '../Layout/Layout.scss';

import Episode from './Episode';

import { base as baseFixture } from './Episode.stories.fixtures';

export default {
  title: 'Components/Episode',
  component: Episode,
  args: {
    ...baseFixture,
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Default = (args) => (<Episode {...args} />);
// Default.args = { ...episdoeFixtures };
