const express = require("express");
const router = express.Router();

const { alexaRequest } = require("../controllers/alexa-controller");

router.post("/", alexaRequest);

module.exports = router;