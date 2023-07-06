import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={style.divContainer}>
      <NavLink to='/home'>Home</NavLink>
      <SearchBar/> 
      <NavLink to='/form'>Form</NavLink>
    </div>
  )
}

export default NavBar