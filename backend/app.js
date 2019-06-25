const express = require("express");
const mongoose = require('mongoose')
const app = express();

mongoose.connect("mongodb+srv://julien:" +
  process.env.MONGO_ATLAS_PW
  + "@cluster0-0hydi.mongodb.net/lifen?retryWrites=true&w=majority")
  .then(() => console.log('connecet'))

const bp = require('body-parser')
const Worker = require('./models/worker')
const Shift = require('./models/shift')
const workersRoutes = require("./routes/workers");

app.use(bp.json())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH,PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/workers", workersRoutes);
module.exports = app;
