const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    street: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    email: {
        tupe: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    connections: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Connections'}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;