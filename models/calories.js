// yakir shriki 318005089
// kobi hazut 207496175
// asaf tzabari 318946977

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

// Define a new schema for calories
const caloriesSchema = new Schema({
    user_id: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true,
        default: () => new Date().getFullYear() // Default to current year
    },
    month: {
        type: Number,
        required: true,
        default: () => new Date().getMonth() + 1 // Default to the current month
    },
    day: {
        type: Number,
        required: true,
        default: () => new Date().getDate() // Default to current day of the month
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['breakfast', 'lunch', 'dinner', 'other'], // Category must be one of these values
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

// Apply the AutoIncrement plugin to the schema to auto-increment the 'id' field
caloriesSchema.plugin(AutoIncrement, { inc_field: 'id' });

// Create the Calories model using the caloriesSchema
const Calories = mongoose.model('calories', caloriesSchema);

// Export the Calories model for use in other parts of the application
module.exports = Calories;
