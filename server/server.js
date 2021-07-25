const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/router");
const mongoDB = require("./config/keys");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

//Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({origin: "*"}));

mongoose.connect(mongoDB.mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("connection successfull...");
}).catch((e) => {
    console.log("No connection");
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});