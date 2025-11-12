import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Product from "./Pages/Product"
import NotFound from './Pages/NotFound'
import Men from './Pages/Men'
import Women from './Pages/women'
import Kids from './Pages/kids'
import Course from './Pages/Course'
import CourseDetail from './Pages/CourseDetail'


const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>        
          <Route path="/" element ={<Home />} />
          <Route path="/about" element ={<About />} />
          <Route path='/course' element={<Course />} />
          <Route path='/course/:id' element={<CourseDetail />} />

          <Route path="/product" element ={<Product />}>
            <Route path='men' element={<Men />} />
            <Route path='women' element={<Women />} />
            <Route path='kids' element={<Kids />} />
          </Route>

          <Route path='*' element ={<NotFound />} /> 
        </Routes>
      <Footer />
    </div>
  )
}

export default App