import { ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import themes from '../styles/themes';

const ThemeContextProvider = ({ children }) => {
  const [current, setCurrent] = useState<number>(0);

  return (
    <ThemeContext.Provider
      value={{ theme: themes[current], setTheme: setCurrent }}
    >
      <ThemeProvider theme={themes[current]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
