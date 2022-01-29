import { ThemeProvider } from '@emotion/react';
import React, { useState, useLayoutEffect } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import themes from '../styles/themes';

const ThemeContextProvider = ({ theme, children }) => {
  const [current, setCurrent] = useState<number>(theme);

  return (
    <ThemeContext.Provider
      value={{ theme: themes[current], setTheme: setCurrent }}
    >
      <ThemeProvider theme={themes[current]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
