import React from 'react'
import Navbar from './Navbar'
import Page1content from './page1content'

const Section1 = (props) => {
  return (
    <>
      <Navbar />
      <Page1content users = {props.users} />
    </> 
  )
}

export default Section1