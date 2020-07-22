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
    db.Event.create(req.body, (err, createdMeetup) => {
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