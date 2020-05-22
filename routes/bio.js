const express = require("express");
const router = express.Router();

const biography = `
    Corredora e fotógrafa, Glorinha é demais!
`;
const currentUrl = "/bio";

router.get("/", (req, res) => {
  res.render("bio", { biography, currentUrl });
});

module.exports = router;
