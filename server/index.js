const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");

const mongoose = require("mongoose");

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});