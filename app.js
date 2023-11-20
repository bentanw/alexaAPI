const express = require("express");
const app = express();

const alexaRoutes = require("./routes/alexa-routes");

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/alexa", alexaRoutes);

module.exports = app;