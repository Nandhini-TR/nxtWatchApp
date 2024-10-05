import React from 'react'

const ThemeContext = React.createContext({
  isLight: true,
  toggleTheme: () => {},
})

export default ThemeContext
