const ActivityRoute = require('express').Router()
const {postActivity, getActivity} = require('../handler/activityHandler')

ActivityRoute.post('/', postActivity)

ActivityRoute.get('/', getActivity)

module.exports = ActivityRoute