import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'react-jss';

import Button from './components/Button';

const root = document.getElementById('root');

const theme = {
  palette: {
    primary: {},
    secondary: {},
    error: {},
    warning: {},
    info: {},
    success: {},
  },
};

render((
  <ThemeProvider theme={theme}>
    <Button>Yo</Button>
  </ThemeProvider>
), root);
