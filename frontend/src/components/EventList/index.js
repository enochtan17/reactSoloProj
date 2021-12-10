import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditEventForm from '../EditEventForm'
import RSVPForm from '../RSVPForm'
import { deleteEvent, getEvents } from '../../store/event'
import './EventList.css'

// 10. import packages, hooks, and the matching function from the store
const EventList = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    // 11. state is passed in w/ dispatch above. accessed by useSelector below.
    // use console.log to see objKeys. events = array of all events.
    let events = useSelector(state => {
        return state.event.list
    })

    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormId, setEditFormId] = useState(null)
    const [showRSVPForm, setShowRSVPForm] = useState(false)
    // console.log('events', events)

    // 12. useEffect to dispatch the matching function from store to get needed data
    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch]) // adding events causes infinite loop

    // if no sessionUser = not logged in
    if (!sessionUser) return null

    // 13. render data in jsx below.
    return (
        <>
            <h2>Events Index</h2>
            <ul className='events-container'>
                {events.map(event => (
                    <div key={`eventDiv-${event.id}`} className='individual-events'>
                        <li className='list' key={event.id}>
                            <h3 key={event.name}>{event.name}</h3>
                            <p key={event.location}>{event.location}</p>
                            <div key={event.details}>{event.details}</div>
                            <div key={event.date}>{event.date}</div>
                            <div key={event.time}>{event.time}</div>
                        </li>
                        { (sessionUser.id === event.hostId) &&
                            <button key={`eventEdit-${event.id}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setShowEditForm(!showEditForm)
                                        setEditFormId(event.id)
                                        }
                                    }
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
                            <button key={`eventRSVP-${event.id}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setShowRSVPForm(!showRSVPForm)
                                        setEditFormId(event.id)
                                        }
                                    }
                            >
                                Show RSVPs
                            </button> }
                    </div>
                ))}
            </ul>
            { showEditForm &&
                <EditEventForm
                eventId={editFormId}
                setShowEditForm={setShowEditForm}
                setEditFormId={setEditFormId}
                />
            }
            { showRSVPForm &&
                <RSVPForm
                    eventId={editFormId}
                    setShowRSVPForm={setShowRSVPForm}
                />
            }
        </>
    )
}

export default EventList
