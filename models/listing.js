// const { NumberUtils, Double, Decimal128 } = require("bson");
// const { builtinModules } = require("module");
// const mongoose = require("mongoose");
// // const { default: mongoose } = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new mongoose.Schema({
//  title: String,
//   description: String,
//   image: String,
//   price: Number,
//   country: String,
//   location: String,

//   // New Features
//   type: String,
//   guests: Number,
//   bedrooms: Number,
//   rating: Number,

//   fee: {
//     cleaning: Number,
//     service: Number,
//   },
// });

// const Listing = mongoose.model("Listing", listingSchema);

// module.exports = Listing;


const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  location: String,
  country: String,

  // New Features
  type: String,
  guests: Number,
  bedrooms: Number,
  rating: Number,

  fee: {
    cleaning: Number,
    service: Number,
  },
});

<<<<<<< HEAD
const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
=======
const listing = mongooes.model("Listing", listingSchema);
module.exports = listing;

>>>>>>> 219e50532c5bca95f04ebcd4f7747d2af613cc66
