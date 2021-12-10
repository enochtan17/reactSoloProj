import { csrfFetch } from "./csrf"

const ATTENDEES = 'rsvps/ATTENDEES'

const getAttendees = rsvpList => ({
    type: ATTENDEES,
    rsvpList
})

export const readAttendees = (eventId) => async dispatch => {
    const res = await fetch(`/api/rsvps/${eventId}`)
    // const res = await fetch(`/api/rsvps`)
    const rsvpList = await res.json()
    // console.log('rsvplist', rsvpList)
    // console.log('inside thunk', rsvpList)
    dispatch(getAttendees(rsvpList))
}

const initialState = {
    rsvpList: []
}

const rsvpReducer = (state = initialState, action) => {
    // console.log('inside reducer')
    switch (action.type) {
        case ATTENDEES:
            // console.log('action', action.rsvpList)
            const allAttendees = {}
            for (let i = 0; i < action.rsvpList.length; i++) {
                allAttendees[i] = action.rsvpList[i]
            }
            return { ...allAttendees, ...state, rsvpList: action.rsvpList }
        default:
            return state
    }
}

export default rsvpReducer
