const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.render('index');
});

router.get('/blog', (req,res) => {
    res.render('blogs.ejs');
});

module.exports = router;