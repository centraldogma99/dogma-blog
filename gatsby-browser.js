/** @jsx jsx */
import '@fontsource/noto-sans-kr';
import { jsx } from '@emotion/react';
import ThemeContextProvider from './src/components/ThemeWrapper';

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
