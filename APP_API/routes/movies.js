var express = require('express');
var router = express.Router();
const ctrlAbout = require("../controller/about");
const ctrlMovie = require("../controller/movie");

/* GET home page. */
router
.route('/movie')
.get(ctrlMovie.getMovies)
.post(ctrlMovie.createMovie);

router
.route('/movie/:movieid')
.get(ctrlMovie.getSingleMovie)
.put(ctrlMovie.updateMovie)
.delete(ctrlMovie.deleteMovie);



module.exports = router;