const express = require("express");
//import express
const mongoose = require("mongoose");

const cors = require("cors");

const apiRoutes = require("./routes/api");
const { PORT, DB_URI, MONGOOSE_OPTIONS } = require("./config");

const app = express();

// Your function to get the secret associated to the key id

////////

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/api", apiRoutes);

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
