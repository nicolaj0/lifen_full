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

app.post("/api/workers", (req, res, next) => {
  const worker = new Worker({first_name: req.body.first_name, status: req.body.status})
  worker.save().then(createdWorker => {
    res.status(201).json({
      message: "Worker added successfully",
      workerId: createdWorker._id
    });
  });
});

app.put("/api/workers/:id", (req, res, next) => {
  const worker = new Worker(
    {
      _id: req.body.id,
      first_name: req.body.first_name,
      status: req.body.status
    })
  console.log(worker)
  Worker.updateOne({_id: req.params.id}, worker).then(result => {
    console.log(result)
    res.status(200).json({message: "update succesfull"});
  })
});

app.delete("/api/workers/:id", (req, res, next) => {
  Worker.deleteOne({_id: req.params.id}).then(result => {
    console.log(result)
    res.status(200).json({message: "post deleted"});
  })
})

app.post("/api/workers/shifts", (req, res, next) => {
  const shift = new Shift({start_date: req.body.start_date, user_id: req.body.user_id})
  shift.save().then(createdShift => {
    res.status(201).json({
      message: "Worker added successfully",
      shiftId: createdShift._id
    });
  });
});

app.use("/api/workers/:id/shifts", (req, res, next) => {
  console.log('eee')
  Shift.find({
    'user_id': {
      $in: [
        mongoose.Types.ObjectId(req.params.id),
      ]
    }
  }).then(docu => {
    res.status(200).json(docu);
  })
});

app.use("/api/workers", (req, res, next) => {
  console.log('eee')
  Worker.find().then(docu => {
    res.status(200).json(docu);
  })
});


module.exports = app;
