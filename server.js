require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

const users = require("./account.controller");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

mongoose.connect(
    process.env.DB,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

setTimeout(function () {
  users.create()
}, 3600000 * 6); // 6 jam

const getProfile = router.get('/profile', users.getProfile);
app.use('/api', getProfile)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
