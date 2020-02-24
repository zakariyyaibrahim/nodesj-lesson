// requiring express
const express = require("express");

// initialize my app
const app = express();

app.get("/", (req, res) => {
  res.send("My first Nodejs connection");
});

// initialize the PORT
const PORT = process.env.PORT || 4000;

//Listening to the PORT
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
