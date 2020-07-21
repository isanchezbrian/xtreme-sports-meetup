const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/extremesports';

mongoose.connect(connectionString,{
  useNewUrlParser: true,
  useCreateIndex:true,
  useUnifiedTopology:true,
  useFindAndModify:false,
})

  .then(()=> console.log('MongoDB connected succesfully'))
  .catch((err)=> console.log(`MongoDB connection error:${err}`));

module.exports={
  // User: require('./users'),
  Meetup: require('./meetup'),
};

