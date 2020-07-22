const express = require('express');
const router = express.Router();

// Database
const db = require('../models');

// CURRENT PATH + '/api/v1'

// API ROUTES ALWAYS RESPOND WITH JSON

router.get('/event/:id', (req, res) => {
  db.Event.findById(req.params.id, (err, foundEvent) => {
    if (err) res.status(400).json(err);

    res.json(foundEvent);
  });
});

router.delete('/event/:id', (req, res) => {
  db.Event.findByIdAndDelete(req.params.id, (err, deletedEvent) => {
    if (err) return res.json(err);

    res.json({success: true})
  });
});


module.exports = router;
