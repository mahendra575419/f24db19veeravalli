// const mongoose = require("mongoose");

// const currentYear = new Date().getFullYear();

// const instrumentSchema = mongoose.Schema({
//   instrument_name: { type: String, required: true },
//   instrument_type: { type: String, required: true },
//   instrument_yr: {type: Number,
//     min: [1900, 'Year must be at least 1900'],
//     max: [currentYear, `Year cannot exceed ${currentYear}`],
//     required: true,
//   },
// });

// module.exports = mongoose.model("instrument", instrumentSchema);
const mongoose = require("mongoose");
 
const instrumentSchema = mongoose.Schema({
  instrument_name: { type: String, required: true },
  instrument_type: { type: String, required: true },
  instrument_yr: { type: Number, required: true,
    min: 1800, // Setting a minimum year
    max: new Date().getFullYear() // Setting a maximum year
  }
});
 
module.exports = mongoose.model("instrument", instrumentSchema);
 