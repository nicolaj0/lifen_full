const Worker = require('../models/worker')
const Shift = require('../models/shift')
const mongoose = require('mongoose')

exports.getShifts = (req, res, next) => {
  console.log('eee')
  Shift.find().populate('worker').then(docu => {
    res.status(200).json(docu);
  })
}

exports.createShift = (req, res, next) => {
  const worker = new Shift({start_date: req.body.start_date})
  worker.save().then(created => {
    res.status(201).json({
      message: "Worker added successfully",
      shiftId: created._id
    });
  });
}
