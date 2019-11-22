var express = require('express');
var router = express.Router();
const ctrlAbout = require("../controller/about");
const ctrlMovie = require("../controller/movie");

/* GET home page. */

router.get('/',ctrlMovie.homelist);
router.get('/list',ctrlMovie.listDisplay);

router.get('/about',ctrlAbout.about);

module.exports = router;
