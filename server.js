const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const databaseConnection = require("./db/connectDB");

const directoryRoutes = require("./routes/directory.route");
const taskRoutes = require("./routes/task.route");
const userRoutes = require("./routes/user.route");
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

app.use("/directories", directoryRoutes);

app.use("/tasks", taskRoutes);

app.use("/users", userRoutes);

const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI || "";
const start = async () => {
  try {
    await databaseConnection(MONGO_URI);
    app.listen(PORT, () => {
      console.log("server live on port", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
