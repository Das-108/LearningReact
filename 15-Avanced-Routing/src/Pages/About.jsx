import React from 'react'
import { useNavigate } from "react-router-dom";

const About = () => {

  let navigate = useNavigate()
  

  return (
    <div>
        <button
        onClick={() => {
          navigate('/')
        }}
         className='bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
          Return Home
          </button>
        <button
        onClick={ () => {
          navigate(-1)
        }}
         className='bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
          Back
          </button>
          
        
        <h1>About Page</h1>
    </div>
  )
}

export default About