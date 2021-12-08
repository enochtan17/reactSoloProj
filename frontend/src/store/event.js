const LOAD = 'events/LOAD'

const load = list => ({
    type: LOAD,
    list
})

export const getEvents = () => async dispatch => {
    const res = await fetch('/api/events')
    if(res.ok) {
        const list = await res.json()
        dispatch(load(list))
    }
}

const initialState = {
    list: []
}

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allEvents = {}
            action.list.forEach(event => {
                allEvents[event.id] = event
            })

            return { ...allEvents, ...state, list: action.list }
        }
        default:
            return state
    }
}

export default eventReducer
