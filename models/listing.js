const { NumberUtils, Double, Decimal128 } = require("bson");
const { builtinModules } = require("module");
const mongooes = require("mongoose");
const Schema = mongooes.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  discription: String,
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/a-house-with-a-car-parked-in-front-of-it-4LLHJHyXQVk",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/a-house-with-a-car-parked-in-front-of-it-4LLHJHyXQVk"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  type: String,
  guests: Number,
  bedrooms: Number,
});

const listing = mongooes.model("Listing", listingSchema);
module.exports = listing;

