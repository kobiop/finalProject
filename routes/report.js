// yakir shriki 318005089
// kobi hazut 207496175
// asaf tzabari 318946977

const express = require('express');
const router = express.Router();
const Calories = require('../models/calories'); // Adjust the path if necessary

// GET /report/ endpoint
router.get('/', async (req, res) => {
    try {
        const { user_id, year, month } = req.query;

        // Validate required parameters
        if (!user_id || !year || !month) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        // Convert year and month to numbers
        const yearNum = parseInt(year);
        const monthNum = parseInt(month);

        // Query to find calories for the specific user, year, and month
        const calories = await Calories.find({
            user_id: user_id,
            year: yearNum,
            month: monthNum
        });

        // Prepare the report object with all categories
        const report = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: []
        };

        // Populate the report with calorie items from the query
        calories.forEach(calorie => {
            report[calorie.category].push({
                day: calorie.day,
                description: calorie.description,
                amount: calorie.amount
            });
        });

        // Return the report as JSON response
        res.json(report);
    } catch (error) {
        console.error('Error fetching report:', error);
        res.status(500).json({ error: 'Failed to fetch report' });
    }
});

module.exports = router;
