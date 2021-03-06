const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.render('index');
});

router.get('/blog', (req,res) => {
    res.render('blogs.ejs');
});

router.get('/contact', (req,res) => {
    res.render('contact.ejs');
});

router.get('/services', (req,res) => {
    res.render('service.ejs');
});

router.get('/proyects', (req,res) => {
    res.render('proyect.ejs');
});

module.exports = router;