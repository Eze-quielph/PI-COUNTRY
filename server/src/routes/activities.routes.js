const ActivityRoute = require('express').Router()
const {postActivity, getActivity, deleteActivity} = require('../handler/activityHandler')

ActivityRoute.post('/', postActivity)

ActivityRoute.get('/', getActivity)

ActivityRoute.delete('/:id', deleteActivity)

module.exports = ActivityRoute