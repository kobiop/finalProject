// yakir shriki 318005089
// kobi hazut 207496175
// asaf tzabari 318946977
const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const userSchema =new Schema({
    id:{
        type:String
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

const User=mongoose.model('User',userSchema);

module.exports = User;