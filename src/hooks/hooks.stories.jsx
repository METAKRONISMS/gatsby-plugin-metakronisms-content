import React from 'react';

import useApp from './useApp';

export default {
  title: 'hooks',
  args: {},
  argTypes: {},
};

export const App = (args) => {
  const stuff = useApp();
  console.info('useApp', args, stuff);
  return Object.keys(stuff).map((key) => (
    <div key={key}>
      <dt>{key}</dt>
      <dd>{typeof stuff[key]}</dd>
    </div>
  ));
};
App.args = {};
