const express = require('express')
const asyncHandler = require('express-async-handler')

const { RSVP, User } = require('../../db/models')

const { check } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')
const { requireAuth } = require('../../utils/auth')

const router = express.Router()

// list all rsvps
router.get('/', asyncHandler(async function(_req, res) {
    const rsvps = await RSVP.findAll()
    // console.log(rsvps)
    return res.json(rsvps)
}))

// get attendees by eventId
router.get('/:eventId(\\d+)', asyncHandler(async function(req, res) {
    const { eventId } = req.params
    const eventRSVPS = await RSVP.findAll({
        where: {
            eventId
        }
    })

    const attendeeList = eventRSVPS.map(rsvp => rsvp.dataValues.userId)

    const namesArray = []

    for (let i = 0; i < attendeeList.length; i++) {
        let userId = attendeeList[i]
        const user = await User.findByPk(userId)
        const username = user.dataValues.username
        namesArray.push(username)
    }

    return res.json(namesArray)
}))

module.exports = router
