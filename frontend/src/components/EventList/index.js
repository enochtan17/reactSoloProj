import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Route, useParams } from 'react-router-dom'

import { EditEventForm } from '../EditEventForm'
import { deleteEvent, getEvents } from '../../store/event'

// 10. import packages, hooks, and the matching function from the store
const EventList = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    // 11. state is passed in w/ dispatch above. accessed by useSelector below.
    // use console.log to see objKeys. events = array of all events.
    let events = useSelector(state => {
        return state.event.list
    })

    // console.log('events', events)

    // 12. useEffect to dispatch the matching function from store to get needed data
    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch]) // adding events causes infinite loop

    // if no sessionUser = not logged in
    if (!sessionUser) return null

    const renderEdit = (e) => {
        e.preventDefault()
    }

    // const deleteEvent = (e) => {
    //     // e.preventDefault()
    //     console.log(e)

    //     const eventId = e.target.className
    //     dispatch(deleteEvent(eventId))
    // }

    // 13. render data in jsx below.
    return (
        <>
            <h2>Events Index</h2>
            <ul className='events-container'>
                {events.map(event => (
                    <div key={`eventDiv-${event.id}`} className='individual-events'>
                        <li key={event.id}>
                            <h3 key={event.name}>{event.name}</h3>
                            <p key={event.location}>{event.location}</p>
                            <div key={event.details}>{event.details}</div>
                            <div key={event.date}>{event.date}</div>
                            <div key={event.time}>{event.time}</div>
                        </li>
                        { (sessionUser.id === event.hostId) &&
                            <button key={`eventEdit-${event.id}`}
                                    onClick={ renderEdit }
                                    >
                                        Edit
                                    </button> }
                        { (sessionUser.id === event.hostId) &&
                            <button key={`deleteEdit-${event.id}`}
                                    onClick={() => dispatch(deleteEvent(event.id))}
                                    className={ event.id }
                                    >
                                        Cancel Event
                                    </button> }
                        { (sessionUser.id !== event.hostId) &&
                            <button key={`eventRSVP-${event.id}`}>RSVP</button> }
                    </div>
                ))}
            </ul>
        </>
    )
}

export default EventList
