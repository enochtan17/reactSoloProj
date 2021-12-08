const LOAD = 'events/LOAD'
const ADD_ONE = 'events/ADD_ONE'

// 3. defined action of loading events.
const load = list => ({
    type: LOAD,
    list
})

const addEvent = event => ({
    type: ADD_ONE,
    event
})

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

export const createEvent = data => async dispatch => {
    console.log(data)
    const res = await fetch('/api/events', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (res.ok) {
        const event = await res.json()
        dispatch(addEvent(event))
        return event
    }
}

const initialState = {
    list: []
}

// 7. add case for action type (LOAD). describes how action will update state.
const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allEvents = {}
            action.list.forEach(event => {
                allEvents[event.id] = event
            })
            // 8. return new state. -> ./index
            return { ...allEvents, ...state, list: action.list }
        }
        case ADD_ONE: {
            if (!state[action.event.id]) {
                const newState = { ...state, [action.event.id]: action.event }
                const eventList = newState.list.map(id => newState[id])
                eventList.push(action.event)
                return newState
            }
            return { ...state, [action.event.id]: {} }
        }
        default:
            return state
    }
}

export default eventReducer
