import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { createEvent } from '../../store/event'
// import './EditEventForm.css'

const CreateEventForm = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()
    const [hostId, setHostId] = useState(0)
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [details, setDetails] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const events = useSelector(state => {
        return state.event
    })
    const errorMessage = useSelector(state => state.errors)
    // console.log('events in form', events)
    // console.log('sessionUser', sessionUser)

    // useEffect(() => {
    //     dispatch(createEvent())
    // }, [dispatch])

    if (!sessionUser) return null
    // hostId = sessionUser.id

    const reset = () => {
        setName('')
        setLocation('')
        setDetails('')
        setDate('')
        setTime('')
    }

    const addEvent = (e) => {
        e.preventDefault()

        const hostId = sessionUser.id
        const data = {
            hostId,
            name,
            location,
            details,
            date,
            time
        }

        dispatch(createEvent(data))
        reset()
    }

    // const handleSubmit = async e => {
    //     e.preventDefault()
    //     // console.log('inside handleSubmit')

    //     const event = await dispatch(createEvent(data))


    //     reset()
    //     // if (event) {
    //     //     history.push(`/events`)
    //     //     // history.push(`/events/${event.id}`)
    //     // }
    // }

    return (
        <section className='new-form'>
            <form>
                <input
                    type='name'
                    placeholder='Event Name'
                    required
                    value={ name }
                    onChange={(e) => setName(e.target.value)} />
                <input
                    type='location'
                    placeholder='Event Location'
                    required
                    value={ location }
                    onChange={(e) => setLocation(e.target.value)} />
                <input
                    type='details'
                    placeholder='Event Details'
                    required
                    value={ details }
                    onChange={(e) => setDetails(e.target.value)} />
                <input
                    type='date'
                    placeholder='Event Date'
                    required
                    value={ date }
                    onChange={(e) => setDate(e.target.value)} />
                <input
                    type='time'
                    placeholder='Event Time'
                    required
                    value={ time }
                    onChange={(e) => setTime(e.target.value)} />
                <button className='form-submit' onClick={ addEvent }>Create new Event</button>
                <button className='hide-form'>Close</button>
            </form>
        </section>
    )
}

export default CreateEventForm
