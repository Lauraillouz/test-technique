const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});
const mongoose = require("mongoose");

// Routers
const usersRouter = require("./routers/usersRouter");
const registerRouter = require("./routers/registerRouter");
const loginRouter = require("./routers/loginRouter");

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });

// Middlewares globaux
app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());

// Home
app.get("/", (_req, res) => {
  res.json({
    status: "OK",
  });
});

// Routes
app.use("/users", usersRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

// Listening on PORT
app.listen(process.env.PORT, () => {
  console.log("Listening on PORT 3001");
});
