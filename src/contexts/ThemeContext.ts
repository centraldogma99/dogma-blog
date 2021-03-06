import { Theme } from '@emotion/react'
import React from 'react'

import themes from '../styles/themes'

interface IThemeContext {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<number>>
}

const ThemeContext = React.createContext<IThemeContext>({
  theme: themes[0],
  setTheme: () => {},
})

export default ThemeContext
