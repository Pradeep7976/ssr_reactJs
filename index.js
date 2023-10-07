const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());

app.use(express.static('build'));

mongoose
  .connect(
    "mongodb+srv://Pradeep:coder7976@cluster0.zs3kf.mongodb.net/MiniProject"
  )
  .then(() => {
    console.log("connected to mongo");
  })
  .catch(() => {
    console.log("Error connecting to Database");
  });
/////////////////////////////////////////////////////////////////////
const uploadimg = require("./routes/uploadimg");
const regester = require("./routes/user");
const reportprob = require("./routes/reportprob");
const mail = require("./routes/mail");
const dept = require("./routes/dept");
const feedback = require("./models/feedback");
//////////////////////////////////////////////////////////////////////

app.use("/api/uploadimg", uploadimg);
app.use("/api/user", regester);
app.use("/api/reportprob", reportprob);
app.use("/api/mail", mail);
app.use("/api/dept", dept);
app.use("/api/feedback", feedback);

app.listen(7000 || process.env.PORT, () => {
  console.log("Server listening on port 7000");
});
