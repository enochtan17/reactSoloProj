import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Route, useParams } from 'react-router-dom'

import { getEvents } from '../../store/event'

const EventList = () => {
    const dispatch = useDispatch()

    const events = useSelector(state => {
        // console.log('state', state)
        return state.event.list
    })

    // console.log('events', events)

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])

    return (
        <>
            <ul>
                {events.map(event => (
                    <li key={event.id}>{event.name}</li>
                    // <li key={event.location}>{event.location}</li>
                    // <li key={event.id}>{event.details}</li>
                    // <li key={event.id}>{event.date}</li>
                    // <li key={event.id}>{event.time}</li>
                ))}
            </ul>
        </>
    )
}

export default EventList
