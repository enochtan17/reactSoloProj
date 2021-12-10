import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { readAttendees } from '../../store/rsvp'

const RSVPForm = ({ eventId, setShowRSVPForm }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const event = useSelector(state => {
        console.log('state', state)
        const eventArray = state.event.list
        console.log('eventArray', eventArray)
        for (let i = 0; i < eventArray.length; i++) {
            if (eventArray[i].id === eventId) {
                return eventArray[i]
            }
        }
    })
    console.log('event', event)

    // sessionUser.username = username of user

    useEffect(() => {
        dispatch(readAttendees(eventId))
    }, [dispatch])

    const rsvpList = useSelector(state => {
        return state.rsvp.rsvpList
    })
    console.log('rsvps', rsvpList)

    const [isRSVP, setIsRSVP] = useState(false)

    // let listIdx
    for (let i = 0; i < rsvpList.length; i++) {
        const username = sessionUser.username
        if (rsvpList[i] === username) {
            setIsRSVP(true)
            // listIdx = i
            break
        }
    }

    return (
        <>
            <h3>Attendees</h3>
            <ul className='attendeesList'>
                {rsvpList.map(name => (
                    <p key={ name }>{ name }</p>
                ))}
            </ul>
            { isRSVP ?
                <button
                    onClick={(e) => {
                        e.preventDefault()
                    }}
                >
                    Un-RSVP
                </button> :
                <button
                    onClick={(e) => {
                        e.preventDefault()
                    }}
                >
                    RSVP
                </button> }
        </>
    )
}

export default RSVPForm
