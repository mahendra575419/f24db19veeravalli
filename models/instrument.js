const mongoose = require("mongoose")
const instrumentSchema = mongoose.Schema({
 instrument_name: String,
 instrument_type: String,
 instrument_yr: Number
})
module.exports = mongoose.model("instrument",
instrumentSchema)