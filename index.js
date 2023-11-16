const express = require("express");
const app = express();

const alexaRoutes = require("./routes/alexa-routes");

// define middlewares
app.use("/api/alexa", alexaRoutes);

port = 3000;
app.listen(port, () => {
  console.log(`Port is currently running on ${port}`);
});
