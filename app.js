const express = require("express");
const path = require("path");
const logger = require("morgan");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");

// routes
const homeRouter = require("./routes/home");
const bioRouter = require("./routes/bio");
const contactRouter = require("./routes/contact");
const emailRouter = require("./routes/email");
const healthRouter = require("./routes/health");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/bio", bioRouter);
app.use("/email", emailRouter);
app.use("/contato", contactRouter);
app.use("/health", healthRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development";

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
