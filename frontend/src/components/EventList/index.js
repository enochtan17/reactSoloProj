import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Route, useParams } from 'react-router-dom'

import { getEvents } from '../../store/event'

// 10. import packages, hooks, and the matching function from the store
const EventList = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    // 11. state is passed in w/ dispatch above. accessed by useSelector below.
    // use console.log to see objKeys. events = array of all events.
    const events = useSelector(state => {
        // console.log('state', state)
        return state.event.list
    })

    // console.log('events', events)

    // 12. useEffect to dispatch the matching function from store to get needed data
    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])

    // if no sessionUser = not logged in
    if (!sessionUser) return null

    // 13. render data in jsx below.
    return (
        <>
            <h2>Events Index</h2>
            {events.map(event => (
                <h3 key={event.id}>{event.name}</h3>
                // <p key={event.location}>{event.location}</p>
                // <li key={event.id}>{event.details}</li>
                // <li key={event.id}>{event.date}</li>
                // <li key={event.id}>{event.time}</li>
            ))}
        </>
    )
}

export default EventList
