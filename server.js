const express = require("express");
const logger = require("morgan");
const passport = require("passport");
const apiRoutes = require("./routes");
require("dotenv").config();

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(passport.initialize());
app.use(passport.session());



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("public"));
}

app.use(apiRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});