import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Nav2 from './Components/Nav2'

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <div className=''>
      <Navbar />
      <Nav2 />
    </div>
  )
}

export default App