const app = require("./app")

port = 3000;
app.listen(port, () => {
  console.log(`Port is currently running on ${port}`);
});
