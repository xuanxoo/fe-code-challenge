import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const TestProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  );
};

export const customRender = (ui, route = '/', options = {}) => {
  const { testingLibraryOptions, ...testProviderProps } = options || {};

  return render(ui, {
    ...testingLibraryOptions,
    wrapper: (props) => <TestProviders {...props} {...testProviderProps} />,
  });
};

export const waitForDebounce = (callback) => {
  setTimeout(() => {
    callback();
  }, 500); //wait for the debounce
};
