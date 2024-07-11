const mongoose = require("mongoose");

async function connectDb() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/usersDB")
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => console.log(err));
}

module.exports = connectDb;
