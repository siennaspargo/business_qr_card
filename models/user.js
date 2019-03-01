const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    industry: {
        type: String
    },
    company: {
        type: String
    },
    connections: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Connection'
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;