var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let color = process.env.BOX_COLOR || 'black';
  res.render('index', { title: 'Box Demo', boxcolor: color });
});

module.exports = router;
