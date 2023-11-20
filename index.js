const app = require("./app")

port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Port is currently running on ${port}`);
});
