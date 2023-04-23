var mongoose = require("mongoose");
const express = require("express");
const app = express();
mongoose.connect("mongodb://localhost:27017/csvFileData");

const uploadRoutes = require("./routes/uploadFileRoutes");

app.use("/", uploadRoutes);

app.listen(3004, () => {
  console.log("api creation successfully");
});
