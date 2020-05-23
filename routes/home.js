const fs = require("fs");
const express = require("express");
const router = express.Router();

// TODO: find a better way to get these paths, using static middleware

function getRows(photos, size = 3) {
  const rows = 1 + (photos.length - (photos.length % 4)) / 4;
  return [...Array(rows).keys()].map((i) =>
    photos.slice(i * size, (i + 1) * size)
  );
}
const photographs = getRows(fs.readdirSync("./public/images/portfolio"));
const currentUrl = "/";

router.get("/", (req, res) => {
  res.render("home", { photographs, currentUrl });
});

module.exports = router;
