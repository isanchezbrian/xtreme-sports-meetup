const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  begin_time: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }, 
  category: {
    type: String,
    required: true,
  }, 
  image_url: {
    type: String,
    required: true,
  }, 
}, {timestamps: true});

const eventModel = mongoose.model('Event', eventSchema);

module.exports = eventModel;