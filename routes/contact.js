const express = require('express');
const router = express.Router();

const currentUrl = '/contato';

router.get('/', (req, res) => {
    const newForm = !req.query.newForm;
    res.render('contact', { currentUrl, newForm });
});

module.exports = router;