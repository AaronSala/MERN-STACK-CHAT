const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/user", userRoutes);

// app.use(notFound)
// app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`server started on port ${PORT}`.yellow.bold));
