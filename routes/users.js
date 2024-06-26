// yakir shriki 318005089
// kobi hazut 207496175
// asaf tzabari 318946977
var express = require('express');
var router = express.Router();
const User = require('../models/users'); // Importing the Cost model
const mongoose = require('mongoose');

// getting the costs report using the GET method
router.get('/:id', async function(req, res, next) {
  try
  {
    const userId = req.params.id;
    const user = await User.find({ id: userId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  }
  catch (err)
  {
    console.log(err);
  }
});

module.exports = router;
