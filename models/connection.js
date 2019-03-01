const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
        new: {
                type: String
        }
});

const Connection = mongoose.model("Connection", connectionSchema);

module.exports = Connection;