const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

async function connectToMongo() {
    try {
      await mongoose.connect(mongoURI);
      console.log("Connected to mongo");
    } catch (error) {
      console.error("Error connecting to mongo:", error);
    }
  }
  
module.exports = connectToMongo;