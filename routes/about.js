// yakir shriki 318005089
// kobi hazut 207496175
// asaf tzabari 318946977
var express = require('express');
var router = express.Router();


// getting the developers info using the GET method
router.get('/', (req, res) => {
    try {
        // Array of developer objects
        const developers = [
            {firstname: 'yakir', lastname: 'shriki', id: 318005089, email: 'yakir0391@gmail.com'},
            {firstname: 'kobi', lastname: 'hazut', id: 207496175, email: 'kobihazut8@gmail.com'},
            {firstname: 'asaf', lastname: 'tzabari', id: 318946977, email: 'asafzabary@gmail.com'}
        ];
        res.json(developers);  // Responds with the array of developers as JSON
    } catch (error) {
        // Send an error response if there's an issue
        console.error('Error retrieving developer information:', error);
        res.status(500).json({ error: 'Failed to retrieve developer information' });
    }
});

module.exports = router;