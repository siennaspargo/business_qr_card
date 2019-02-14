const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    requester: { 
        type: Schema.Types.ObjectId, 
        ref: 'Users'
    }
});

const Connection = mongoose.model("Connection", connectionSchema);

module.exports = Connection;