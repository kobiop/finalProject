// yakir shriki 318005089
// kobi hazut 207496175
// asaf tzabari 318946977

const mongoose = require("mongoose");
const Schema=mongoose.Schema;

// Define a new schema for users
const userSchema =new Schema({
    id:{
        type:Number
    },
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    birthday:{
        type:Date
    }

});

// Create the User model using the userSchema
const User=mongoose.model('User',userSchema);

// Export the User model for use in other parts of the application
module.exports = User;