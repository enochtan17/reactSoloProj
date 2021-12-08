import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LoginFormPage from './components/Login'
import SignupFormPage from './components/Signup'
import * as sessionActions from './store/session'
import Navigation from './components/Navigation'
import EventList from './components/EventList'

function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={ isLoaded } />
      {isLoaded && (
        <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
      </Switch>
      )}
      <EventList />
    </>
  )
}

export default App
