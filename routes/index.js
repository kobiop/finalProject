// yakir shriki 318005089
// kobi hazut 207496175
// asaf tzabari 318946977
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
