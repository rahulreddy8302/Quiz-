const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(morgan("tiny"));

let mongoid = process.env.SECRET_MONGO_USER;
let pswrd = process.env.SECRET_MONGO_PSWD;

const CONNECTION_URL = `mongodb+srv://${mongoid}:${pswrd}@cluster0.p6xod.mongodb.net/QUIZ?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server Running on port: http://localhost:${port}`)))
  .catch((error) => console.log(`${error} did not connect`));

const testRouter = require("./routes/test");
app.use("/api/test", testRouter);


// app.listen(port, console.log(`listing at port ${port}`));
