const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });
const app = express();

// Routers
const usersRouter = require("./routers/usersRouter");
const registerRouter = require("./routers/registerRouter");

// Middlewares globaux
app.use(express.json());
app.use(morgan("tiny"));

// Home
app.get("/", (_req, res) => {
  res.json({
    status: "OK",
  });
});

// Routes
app.use("/users", usersRouter);
app.use("/register", registerRouter);

// Listening on PORT
app.listen(process.env.PORT, () => {
  console.log("Listening on PORT 3001");
});
