import React, { createContext } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = (props) => {
  return (
    <ThemeDataContext.Provider value='Gaurnaga'>
      {props.children}
    </ThemeDataContext.Provider>
  )
}

export default ThemeContext
