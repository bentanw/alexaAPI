const express = require("express");
const router = express.Router();

const { alexaRequest } = require("../controller/alexa-controller");

router.post("/", alexaRequest);

module.exports = router;