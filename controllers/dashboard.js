const express = require('express');
const router = express.Router();
const db = require('../models');


// const { route } = require('./usersController');

// Current Path ='/cars'

//--Cars Index--
router.get('/', (req,res)=>{
  db.Meetup.find({},(err, allMeetups)=>{
    // res.render('cars/index',{ cars: allCars,})
    console.log("test", allMeetups)
    res.send(allMeetups)
  })
})

router.post('/', (req, res) => {
  
  const newMeetup = {
    meetup_name: "Surfing",
    organizer: {
      name: "Sebastian Lee",
      email: "slee317@gmail.com",
    },
    description: "Former competitive surfer for 4 years",
    difficulty: "Novice",
    location: "Santa Monica",

  }; 

  db.Meetup.create(
    newMeetup,
    (err, createdTask) => {
      if (err) return console.log(err);
     console.log(createdTask); 
     res.redirect ('/');
  });
});

module.exports = router;












