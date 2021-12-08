import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Route, useParams } from 'react-router-dom'

const CreateEventForm = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [details, setDetails] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    if (!sessionUser) return null

    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            name,
            location,
            details,
            date,
            time
        }

        const event = await dispatch(createEvent(data))
        if (event) {
            history.push(`/events/${event.id}`)

        }
    }

    return (
        <section className='new-form'>
            <form onSubmit={ handleSubmit }>

            </form>
        </section>
    )
}
