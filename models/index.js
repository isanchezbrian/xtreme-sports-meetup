const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_MJ = ('mongodb://localhost:27017/extreme-sports-meetup');

mongoose.connect(process.env.MONGODB_MJ || MONGODB_MJ, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then( () => console.log('succesful connection') )
  .catch( (err) => console.log(`connection failed: ${err}`) )

module.exports = {
  Event: require('./event'),
};