const express = require('express')
const asyncHandler = require('express-async-handler')

const { Event } = require('../../db/models')

const { check } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')
const { requireAuth } = require('../../utils/auth')

const router = express.Router()

// 1. defined backend route of /api/events w/ querie of all events in json -> index.js
router.get('/', asyncHandler(async function(_req, res) {
    const event = await Event.findAll()
    // console.log(event)
    return res.json(event)
}))

router.get('/:eventId(\\d+)', requireAuth, asyncHandler(async(req, res) => {
    const { eventId } = req.params
    const event = await Event.findByPk(eventId)

    return res.json(event)
}))

const validateEvent = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid event name'),
    check('location')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid location'),
    check('details')
        .exists({ checkFalsy: true })
        .withMessage('Please provide event details'),
    check('date')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid date'),
    check('time')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid time'),
    handleValidationErrors
]

// post event route
router.post('/new', requireAuth, validateEvent, asyncHandler(async(req, res) => {
    console.log('userId', req.user.dataValues)
    console.log('req body', req.body)
    // const { hostId } = req.user.dataValues.id
    const { hostId, name, location, details, date, time } = req.body
    const event = await Event.create({
        hostId,
        name,
        location,
        details,
        date,
        time
    })

    return res.json({ event })
}))

// edit event route
router.put('/:eventId(\\d+)', requireAuth, validateEvent, asyncHandler(async(req, res) => {
    const { eventId } = req.params
    const event = await Event.findByPk(eventId)

    const {
        name,
        location,
        details,
        date,
        time
    } = req.body

    await event.update({
        name,
        location,
        details,
        date,
        time
    })

    return res.json(event)
}))

// delete event route
router.delete('/:eventId(\\d+)', requireAuth, asyncHandler(async(req, res) => {
    const { eventId } = req.params
    const event = await Event.findByPk(eventId)

    await event.destroy()

    return res.json({ id: eventId })
}))

module.exports = router
