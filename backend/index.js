const connectToMongo = require("./modules/db")
const express = require("express");
connectToMongo();

const app = express();
const PORT = 8000;

app.use("/api/auth", require("./routes/auth"))

app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`);
})
