const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const message = `I guess everything is just fine on port ${req.app.locals.port}.`;
  console.log(message);
  res.render("health", { message });
});

module.exports = router;
