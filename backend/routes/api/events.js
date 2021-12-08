const express = require('express')
const asyncHandler = require('express-async-handler')

const { Event } = require('../../db/models')

const router = express.Router()

// 1. defined backend route of /api/events w/ querie of all events in json -> index.js
router.get('/', asyncHandler(async function(_req, res) {
    const event = await Event.findAll()
    // console.log(event)
    return res.json(event)
}))

module.exports = router
