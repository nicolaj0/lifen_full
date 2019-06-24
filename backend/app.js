
const express = require("express");
const mongoose = require('mongoose')
const app = express();

mongoose.connect("mongodb+srv://julien:wKH0QkFIF5dTGfFZ@cluster0-0hydi.mongodb.net/lifen?retryWrites=true&w=majority")
  .then(() => console.log('connecet'))

const bp = require('body-parser')
const Worker = require('./models/worker')

app.use(bp.json())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/workers", (req, res, next) => {
  const worker = new Worker({first_name: req.body.first_name, status: req.body.status})
  console.log(worker)
  worker.save()
  res.status(201).json()

})


app.delete("/api/workers/:id",(req, res, next) => {
  console.log(req.params.id)
  Worker.deleteOne({_id : req.params.id}).then(result =>{
    console.log(result)
    res.status(200).json({message : "post deleted"});

  })
})

app.use("/api/workers", (req, res, next) => {
  Worker.find().then(docu => {
    res.status(200).json(docu);
  })
});

module.exports = app;
