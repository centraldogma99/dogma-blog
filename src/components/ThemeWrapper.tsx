import { ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import themes from '../styles/themes';

const ThemeContextProvider = ({ children }) => {
  const themeLocalStorage = localStorage.getItem('dogmaTheme');
  const [current, setCurrent] = useState<number>(
    themeLocalStorage != '' ? Number(themeLocalStorage) : 0,
  );

  return (
    <ThemeContext.Provider
      value={{ theme: themes[current], setTheme: setCurrent }}
    >
      <ThemeProvider theme={themes[current]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
