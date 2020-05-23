const fs = require("fs");
const express = require("express");
const router = express.Router();

// TODO: find a better way to get these paths, using static middleware

function getRows(photos) {
  return [photos];
}
const photographs = getRows(fs.readdirSync("./public/images/portfolio"));
const currentUrl = "/";

router.get("/", (req, res) => {
  res.render("home", { photographs, currentUrl });
});

module.exports = router;
