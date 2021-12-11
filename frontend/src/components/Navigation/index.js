import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfileButton from './ProfileButton'
import LoginFormModal from '../LoginFormModal'
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
        <LoginFormModal />
        <NavLink to="/signup" id='signup'>Sign Up</NavLink>
      </>
    )
  }

  return (
    <nav className='homenav'>
      <ul className='nav-ul'>
        <li className='each-nav-component list'>
          <NavLink exact to="/" id='home-link'>Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
