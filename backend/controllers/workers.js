const Worker = require('../models/worker')
const Shift = require('../models/shift')
const mongoose = require('mongoose')

exports.getWorkers = (req, res, next) => {
  console.log('eee')
  Worker.find().then(docu => {
    res.status(200).json(docu);
  })
}

exports.createWorker = (req, res, next) => {
  const worker = new Worker({first_name: req.body.first_name, status: req.body.status})
  worker.save().then(createdWorker => {
    res.status(201).json({
      message: "Worker added successfully",
      workerId: createdWorker._id
    });
  });
}

exports.putWorker = (req, res, next) => {
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
}

exports.deleteWorker = (req, res, next) => {
  Worker.deleteOne({_id: req.params.id}).then(result => {
    console.log(result)
    res.status(200).json({message: "post deleted"});
  })
}

exports.postShiftsForWorker = (req, res, next) => {
  const shift = new Shift({start_date: req.body.start_date, user_id: req.body.user_id})
  shift.save().then(createdShift => {
    res.status(201).json({
      message: "Worker added successfully",
      shiftId: createdShift._id
    });
  });
}

exports.getShiftsFoWorker = (req, res, next) => {
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
}
