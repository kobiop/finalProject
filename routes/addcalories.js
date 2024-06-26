// yakir shriki 318005089
// kobi hazut 207496175
// asaf tzabari 318946977
var express = require('express');
var Calories = require('../models/calories');
var router = express.Router();


router.post('/',   async function(req, res, next) {
    try {
        const {user_id, year, month, day, description, category, amount} = req.body;
        if (!user_id || !description || !category || !amount) {
            return res.status(400).send({error: "Missing required parameters"});
        }
        const availableCategories = ['breakfast','lunch','dinner','other'];
        if (!availableCategories.includes(category)) {
            return res.status(400).json({ error: 'Invalid category' });
        }
        const newCalories = new Calories(req.body);

        await newCalories.save();

        res.status(201).json({ message: 'Calories item added successfully' });
    }
    catch(error){
        console.error('Error adding calorie item:', error);
        res.status(500).json({ error: 'Failed to add calorie item' });    }
});

module.exports = router;

