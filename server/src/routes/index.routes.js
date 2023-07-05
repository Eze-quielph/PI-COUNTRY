const { Router } = require("express");
const CountryRouter = require('./Country.routes')
const ActivityRoute = require('./activities.routes')
const router = Router();

router.use('/countries', CountryRouter)
router.use('/activities', ActivityRoute)

module.exports = router;
