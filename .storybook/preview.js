import React from 'react';

import ThemeManager from '../src/components/ThemeManager/ThemeManager';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme switcher',
    defaultValue: 'light',
    toolbar: {
      icon: 'eye',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      { name: 'dark', value: '#111' }
    ]
  }
}

export const decorators = [
  (Story, context) => (
    <ThemeManager
      mode={context.globals.theme}
    >
      <Story />
    </ThemeManager>
  ),
];
