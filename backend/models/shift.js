const mongoose = require('mongoose');

const shiftSchema = mongoose.Schema({
  start_date: { type: Date, required: true },
  user_id : { type: String }
});

module.exports = mongoose.model('Shift', shiftSchema);
