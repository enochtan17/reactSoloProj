const express = require('express')
const asyncHandler = require('express-async-handler')

const { Event } = require('../../db/models')

const router = express.Router()

router.get('/', asyncHandler(async function(_req, res) {
    const event = await Event.findAll()
    // console.log(event)
    return res.json(event)
}))

module.exports = router
