const Worker = require('../models/worker')
const Shift = require('../models/shift')
const mongoose = require('mongoose')

exports.getShifts = (req, res, next) => {
  console.log('eee')
  Shift.find().then(docu => {
    res.status(200).json(docu);
  })
}
