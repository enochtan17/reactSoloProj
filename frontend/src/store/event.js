import { csrfFetch } from "./csrf"

const LOAD = 'events/LOAD'
const ADD_ONE = 'events/ADD_ONE'
const DELETE_ONE = 'events/DELETE_ONE'

// 3. defined action of loading events.
const load = list => ({
    type: LOAD,
    list
})

const addEvent = event => ({
    type: ADD_ONE,
    event
})

const deleteEvent = eventId => {
    return {
        type: DELETE_ONE,
        eventId
    }
}

// 4. function w/ async dispatch, fetches json from backend route
export const getEvents = () => async dispatch => {
    const res = await fetch('/api/events')
    if(res.ok) {
        // 5. define list as the json obj
        const list = await res.json()
        // 6. call dispatch with defined action f(x) with step 5 as param
        // param needs to match below and above in action f(x)
        dispatch(load(list))
    }
}

// export const createEvent = data => {
//     csrfFetch('/api/events/new')
//         .then((data) => {
//             return {
//                 type: ADD_ONE,
//                 data
//             }
//         })
//         .catch((error) => {
//             return {
//                 type: 'ADD_ONE_FAIL',
//                 errorMsg: error.message
//             }
//         })
// }

export const createEvent = data => async () => {
    // console.log('data', data)
    const res = await csrfFetch('/api/events/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log('res', res)
    try {
        // const event = await res.json()
        // console.log('event', event)
        // dispatch(addEvent(event))
        return {
            type: ADD_ONE,
            event: res
        }
    } catch (e) {
        return {
            type: 'ADD_ONE_FAIL',
            errorMsg: e.message
        }
    }
}

// export const editEvent = data => async() => {
//     const res = await csrfFetch('/api/events/:eventId(\\d+)',)
// }

const initialState = {
    list: [],
    event: [],
    errorMsg: ''
}

// 7. add case for action type (LOAD). describes how action will update state.
const eventReducer = (state = initialState, action) => {
    // console.log('action', action.type)
    switch (action.type) {
        case LOAD:
            const allEvents = {}
            action.list.forEach(event => {
                allEvents[event.id] = event
            })
            // 8. return new state. -> ./index
            return { ...allEvents, ...state, list: action.list }
        case ADD_ONE:
            return {
                ...state,
                event: [...state.event, action.data]
            }
        case 'ADD_ONE_FAIL':
            return {
                ...state,
                errorMsg: action.errorMsg
            }
        default:
            return state
    }
}

export default eventReducer
