const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
 instrument_name: String,
 type: String,
 year_made: Number
})
module.exports = mongoose.model("instrument",
instrumentSchema)