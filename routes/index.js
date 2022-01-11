var express = require('express');
var os = require('os');
var router = express.Router();
const hostName = os.hostname();

let num = Math.floor(Math.random() * 4);
let color = 'red';
if(num == 0) {
  color = 'blue';
} else if(num == 1) {
  color = 'green';
} else if(num == 2) {
  color = 'orange';
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Box Demo', boxcolor: color, hostName: hostName });
});

module.exports = router;
