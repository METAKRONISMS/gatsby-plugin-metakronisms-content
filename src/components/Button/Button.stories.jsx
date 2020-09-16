/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

export const Basic = (args) => <Button {...args} />;
Basic.args = { children: 'hello', disabled: false };

export const DefaultHidden = (args) => <Button {...args} />;
DefaultHidden.args = { ...Basic.args, hidden: true };
