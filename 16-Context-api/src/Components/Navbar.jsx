import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {

    const data = useContext(ThemeDataContext)
    console.log(data)

    return (
    <div className='nav'>
        <h2>{data}</h2>
        <Nav2 theme={props.theme}  />
    </div>
  )
}

export default Navbar