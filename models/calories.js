// yakir shriki 318005089
// kobi hazut 207496175
// asaf tzabari 318946977
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

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
        default: () => new Date().getMonth() + 1
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
        enum: ['breakfast', 'lunch', 'dinner', 'other'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

caloriesSchema.plugin(AutoIncrement, { inc_field: 'id' });

const Calories = mongoose.model('calories', caloriesSchema);

module.exports = Calories;
