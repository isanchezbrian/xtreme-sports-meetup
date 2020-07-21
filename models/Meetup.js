//meetup name
//organizer name
//difficulty
//location
//description

const mongoose = require('mongoose');

const meetupSchema = new mongoose.Schema({
  meetup_name: {
    type: String,
    required: true,
  },
  organizer: {
    name: { 
      type: String,
      required: true,
    },
     email: { 
      type: String,
      required: true,
    },
     description: { 
      type: String,
    },
  },
  difficulty: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {timestamps:true})

const Meetup = mongoose.model('meetup', meetupSchema)

module.exports = Meetup;