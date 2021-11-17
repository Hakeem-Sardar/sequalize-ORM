const bodyParser = require("body-parser");
const express = require("express");
const db = require("./src/dbConfig/config");
require("dotenv").config();
const routess = require("./src/routes/userRoutes");
const route = require("./src/routes/profileRoutes")
// const sync = require("./src/utils/tableSync")

const app = express();
// data base connection checkout
db.authenticate()
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("database error", error);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routess);
app.use(route)

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`app listening on port ::${port}`);
});
