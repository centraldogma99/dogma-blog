import { ThemeProvider } from '@emotion/react'
import {
  createTheme,
  ThemeProvider as ThemeProviderMui,
} from '@mui/material/styles'
import React, { useState } from 'react'
import { useEffect } from 'react'

import ThemeContext from '../contexts/ThemeContext'
import themes from '../styles/themes'

const ThemeContextProvider = ({ children }) => {
  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    const themeLocalStorage = localStorage.getItem('dogmaTheme')
    const theme =
      !themeLocalStorage || themeLocalStorage === ''
        ? 0
        : Number(themeLocalStorage)
    setCurrent(theme)
  }, [])

  return (
    <ThemeContext.Provider
      value={{ theme: themes[current], setTheme: setCurrent }}
    >
      <ThemeProviderMui theme={createTheme()}>
        <ThemeProvider theme={themes[current]}>{children}</ThemeProvider>
      </ThemeProviderMui>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
