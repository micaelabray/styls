const mongoose = require ("mongoose");

//reference to Schema constructor
const Schema = mongoose.Schema;

//uses Schema constructor to make an UserSchema object
const UserSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true 
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

//This creates our model from the above schema, using mongoose's model
const User = mongoose.model("User", UserSchema);

//Export the User Model
module.exports = User;