const express = require('express');
const db = require('../models');
const router = express.Router();


router.get('/', (req, res) => {
    db.Event.find({}, (err, allMeetups) => {
      if (err) return console.log(err);
          res.render("dashboard", {meetups: allMeetups});   
    });
});

router.post('/', (req, res) => {
    newMeetup = {
        name: "Patrick's Snow Boarding",
        organizer: {
            name: "Patrick",
            email: "Patrick@email.com",
            description: "Hi I'm Patrick."
        },
        difficulty: "Medium",
        duration: "3 hrs per meet",
        location: "San Francisco",
        description: "This is it. Come be awesome",
        next_meet: "Tomorrow",
        members: 2,
        pic_url:"Test"
    }
    db.Event.create(newMeetup, (err, createdMeetup) => {
        if (err) return console.log(err);
        console.log(createdMeetup);
        res.redirect("/dashboard");
    });
});

router.put('/:id', (req, res) => {
    db.Event.findByIdAndUpdate(
      req.params.id, 
      req.body,
      {new: true},
      (err, updatedMeetup) => {
        if (err) return console.log(err);
        console.log(updatedMeetup);
        
        res.redirect("/dashboard");    });
  });
  
router.delete('/:id', (req, res) => {
    db.Event.findByIdAndDelete(
      req.params.id,
      (err, deletedMeetup) => {
        if (err) return console.log(err);
        console.log(deletedMeetup);
  
        res.redirect("/dashboard");      
    });
});

module.exports = router;