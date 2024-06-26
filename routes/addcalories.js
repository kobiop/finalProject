// yakir shriki 318005089
// kobi hazut 207496175
// asaf tzabari 318946977

const express = require('express');
const Calories = require('../models/calories'); // Importing the Calories model from ../models/calories
const router = express.Router(); // Creating an Express router instance

// POST endpoint to add a new calorie item
router.post('/', async function(req, res, next) {
    try {
        // Destructuring the request body to extract required fields
        const { user_id, year, month, day, description, category, amount } = req.body;

        // Check for required parameters
        if (!user_id || !description || !category || !amount) {
            return res.status(400).json({ error: "Missing required parameters" });
        }

        // Validate category against available options
        const availableCategories = ['breakfast', 'lunch', 'dinner', 'other'];
        if (!availableCategories.includes(category)) {
            return res.status(400).json({ error: 'Invalid category' });
        }
        const intDay = parseInt(day);
        const intMonth = parseInt(month);

        // Validate day of the month (1-31)
        if (intDay < 1 || intDay > 31) {
            return res.status(400).json({ error: 'Invalid day of the month' });
        }

        // Validate month (1-12)
        if (intMonth < 1 || intMonth > 12) {
            return res.status(400).json({ error: 'Invalid month' });
        }

        // Create a new instance of the Calories model with req.body
        const newCalories = new Calories(req.body);

        // Save the newCalories object to the database
        await newCalories.save();

        // Respond with a success message
        res.status(201).json({ message: 'Calories item added successfully' });
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error adding calorie item:', error);
        res.status(500).json({ error: 'Failed to add calorie item' });
    }
});

module.exports = router; // Exporting the router instance for use in other parts of the application


