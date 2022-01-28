import React, { useState } from 'react';
import { Theme } from '@emotion/react';
import themes from '../styles/themes';

interface IThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<number>>;
}

const ThemeContext = React.createContext<IThemeContext>({
  theme: themes[0],
  setTheme: () => {},
});

export default ThemeContext;
