import React from 'react'

const ThemeContext = React.createContext({
  isLight: true,
  toggleTheme: () => {},
  savedVideos: [],
  toggleSavedVideos: () => {},
})

export default ThemeContext
