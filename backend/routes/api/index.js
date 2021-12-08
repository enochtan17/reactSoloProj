const router = require('express').Router()
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const eventsRouter = require('./events.js')

router.use('/session', sessionRouter)
router.use('/users', usersRouter)
// 2. definted /events and imported router from events.js
// localhost:5000/api/events shows the json of what we queried. -> frontend/store/event
router.use('/events', eventsRouter)

module.exports = router
