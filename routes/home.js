const express = require('express');
const router = express.Router();

const photographs = [
    [
        'hero_natgeo_940x529.jpg',
        'nat_geo_conwww5.jpg',
        'nat_geo_conwww3.jpg'
    ],
    [
        '1-1.jpg',
        'nat_geo_conwww11.jpg',
        'potw1732a.jpg'
    ]
];
const currentUrl = '/';

router.get('/', (req, res) => {
    res.render('home', { photographs, currentUrl });
});

module.exports = router;