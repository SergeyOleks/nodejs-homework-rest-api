const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);
mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });


