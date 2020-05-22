const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const body = req.body;
    res.redirect('/contato?newForm=false');
});

module.exports = router;


router.get('/', (req, res) => {
    //  App running on port ${req.app.locals.port}
    const message = `I guess everything is just fine.`;
    console.log(message);
    res.render('health', { message });
});