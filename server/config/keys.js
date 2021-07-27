require("dotenv").config();
module.exports = {
    mongodbURL: process.env.MANGODB_KEY,
    seceretTokenId: process.env.SECERET_KEY
};