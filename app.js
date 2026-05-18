const express = require("express");
const app = express();
const mongooes = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const listing = require("./models/listing.js");
const ejsMate = require("ejs-mate");

const MONGO_URL = "mongodb://127.0.0.1:27017/test";

main()
  .then(() => {
    console.log("Conneected to DB");
  })

  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongooes.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Heyy I am Amit from india");
});

// index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

//  new Route
app.get("/listings/new", (req, res) =>{
    res.render("listings/new.ejs");
});

// show Route
app.get("/listings/:id", async(req, res) =>{
    let{id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{ listing});
});

// Create Route
app.post("/listings", async (req, res) => {
    // let {title, discription, image, price, country, location} = req.body;   this is are first method

    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");

});

// Edit Route
app.get("/listings/:id/edit", async(req, res) =>{
   let{ id } = req.params;
   id = id.trim();
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{ listing });
});



// Update Route 
app.put("/listings/:id", async(req, res) => {
  let {id} = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

// Delete Route
app.delete("/listings/:id", async(req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
});

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     discription: "By the beach",
//     price: 12000,
//     location: "Calangute, Goa",
//     country: "India,",
//   });
//   await sampleListing.save();
//   console.log("sample is saved");
//   res.send("successfull testing");
// });

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
