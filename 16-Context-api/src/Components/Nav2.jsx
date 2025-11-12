import React, { createContext, useContext } from 'react'

useContext()
const Nav2 = (props) => {
  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Service</h4>
        {props.theme}
    </div>
  )
}

export default Nav2