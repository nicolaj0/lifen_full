const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  status: { type: String, required: true }
});

module.exports = mongoose.model('Worker', postSchema);
