import '@fontsource/noto-sans-kr'

import React from 'react'

import ThemeContextProvider from './src/components/ThemeContextProvider'

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>
}
