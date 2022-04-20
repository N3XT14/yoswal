// Imports
const express = require("express");
const cors = require("cors");
const path = require('path');
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
// Server production assets

if ( process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "frontend_react", "build")));
  app.get("*", (req, res) => {
    console.log(res);
    res.sendFile(path.resolve(__dirname, 'frontend_react', 'build', 'index.html'));
  });
};


app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
})