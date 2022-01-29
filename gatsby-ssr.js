import React from 'react';
import '@fontsource/noto-sans-kr';
import ThemeContextProvider from './src/components/ThemeWrapper';

export const wrapRootElement = ({ element }) => {
  const themeLocalStorage = localStorage.getItem('dogmaTheme');
  const theme =
    !themeLocalStorage || themeLocalStorage === ''
      ? 0
      : Number(themeLocalStorage);

  return <ThemeContextProvider theme={theme}>{element}</ThemeContextProvider>;
};
