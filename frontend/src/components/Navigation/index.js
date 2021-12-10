import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfileButton from './ProfileButton'
import './Navigation.css'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks

  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={ sessionUser } />
    )
  } else {
    sessionLinks = (
      <>
        <span className='login-link'>
          <NavLink to="/login">Log In</NavLink>
        </span>
        <span className='signup-link'>
          <NavLink to="/signup">Sign Up</NavLink>
        </span>
      </>
    )
  }

  return (
    <ul className='nav-ul'>
      <li className='each-nav-component list'>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  )
}

export default Navigation
