import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 px-8 py-4 text-white'>
        <h2 className='text-xl font-bold'> Hare krsan</h2>
        <div className='flex gap-10'>
          <Link className='text-xl font-bold' to='/' >Home</Link>
          <Link className='text-xl font-bold' to='/about'>About</Link>
          <Link className='text-xl font-bold' to='/course'>Course</Link>
          <Link className='text-xl font-bold' to='/product'>Product</Link>          
        </div>
    </div>
  )
}

export default Navbar