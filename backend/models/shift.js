const mongoose = require('mongoose');

const shiftSchema = mongoose.Schema({
  start_date: { type: Date, required: true },
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker' },
});

module.exports = mongoose.model('Shift', shiftSchema);
