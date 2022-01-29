import React from 'react';
import '@fontsource/noto-sans-kr';
import ThemeContextProvider from './src/components/ThemeWrapper';

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
