// yakir shriki 318005089
// kobi hazut 207496175
// asaf tzabari 318946977

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Final Server Side Project' });
});

module.exports = router;
