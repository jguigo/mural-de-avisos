const express = require("express");
const routes = express.Router();
const muralController = require("../controllers/muralController");

routes.get("/all", muralController.list);
routes.post("/new", muralController.newPost);

module.exports = routes;
