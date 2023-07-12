const ActivityRoute = require("express").Router();
const {
  postActivity,
  getActivity,
  deleteActivity,
  updateActivity,
} = require("../handler/activityHandler");

ActivityRoute.post("/", postActivity);

ActivityRoute.get("/", getActivity);

ActivityRoute.delete("/:id", deleteActivity);

ActivityRoute.put("/:id", updateActivity);

module.exports = ActivityRoute;
