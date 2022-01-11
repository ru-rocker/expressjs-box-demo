var express = require('express');
var os = require('os');

var router = express.Router();
const hostName = os.hostname();

/* GET home page. */
router.get('/', function(req, res, next) {
  let color = process.env.BOX_COLOR || 'black';
  res.render('index', { title: 'Box Demo', boxcolor: color, hostName: hostName });
});

module.exports = router;
