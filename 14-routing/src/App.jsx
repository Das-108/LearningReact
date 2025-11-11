import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/about'
import Navbar from './Componets/Navbar'
const App = () => {
  return (
    <div>
      <Navbar />   
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element= {<Contact />} />
      </Routes>
    </div>
  )
}

export default App