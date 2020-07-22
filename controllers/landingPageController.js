const express = require('express');
const db = require('../models');
const router = express.Router();


router.get('/', (req, res) => {
    db.Event.find({}, (err, allMeetups) => {
      if (err) return console.log(err);
      else if(allMeetups.length === 0) createSampleData();
      else {
          console.log(allMeetups);
          res.render("landing-page",{meetups: allMeetups});  
      }   
    });
});

function createSampleData(){
    sampleData = [
        {
            name: "Patrick's Snow Boarding",
            date: "7/32/2020",
            begin_time: "5:00PM",
            end_time: "10:00PM",
            difficulty: "Beginner",
            location: "San Francisco",
            description: "This is it. Come be awesome",
            image_url:"Test",
            category: "Snow"
        },
        {
            name: "Sky Dive Frenzy",
            date: "7/32/2020",
            begin_time: "5:00PM",
            end_time: "10:00PM",
            difficulty: "Intermediate",
            location: "San Francisco",
            description: "This is it. Come be awesome",
            next_meet: "Tomorrow",
            image_url:"Test",
            category: "Sky"
        },
        {
            name: "Gina's Water Rafting",
            date: "7/32/2020",
            begin_time: "5:00PM",
            end_time: "10:00PM",
            difficulty: "Advanced",
            location: "San Francisco",
            description: "This is it. Come be awesome",
            next_meet: "Tomorrow",
            image_url:"Test",
            category: "Water"
        },
    ]
    db.Event.insertMany(sampleData, (err, createdMeetups) => {
        if (err) return console.log(err);
        console.log("Create Sample Data");
        db.Event.find({}, (err, allMeetups) => {
          if (err) return console.log(err);
          res.render("landing-page",{meetups: allMeetups});   
        });
    });
}


module.exports = router;