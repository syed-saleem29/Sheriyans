require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/config/database");

// Connection to DB
connectToDb();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
