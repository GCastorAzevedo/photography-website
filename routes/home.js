const fs = require("fs");
const express = require("express");
const router = express.Router();

// TODO: find a better way to get these paths, using static middleware

const photographs = fs.readdirSync("./public/images/portfolio").slice(0, 6);
const currentUrl = "/";

router.get("/", (req, res) => {
  res.render("home", { photographs, currentUrl });
});

module.exports = router;
