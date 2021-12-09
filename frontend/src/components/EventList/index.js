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
    let events = useSelector(state => {
        // console.log('state', state)
        return state.event.list
    })

    // console.log('events', events)

    // 12. useEffect to dispatch the matching function from store to get needed data
    useEffect(async() => {
        const newEvents = await getEvents()
        dispatch(newEvents)
        events = newEvents.list
    }, [dispatch])

    // if no sessionUser = not logged in
    if (!sessionUser) return null

    // 13. render data in jsx below.
    return (
        <>
            <h2>Events Index</h2>
            <ul className='events-container'>
                {events.map(event => (
                    <li key={event.id}>
                        <h3 key={event.name}>{event.name}</h3>
                        <p key={event.location}>{event.location}</p>
                        <div key={event.details}>{event.details}</div>
                        <div key={event.date}>{event.date}</div>
                        <div key={event.time}>{event.time}</div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default EventList
