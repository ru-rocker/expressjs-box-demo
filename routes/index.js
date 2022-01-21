var express = require('express');
var os = require('os');

var router = express.Router();
const hostName = os.hostname();

/* GET home page. */
router.get('/', function(req, res, next) {
  let color = process.env.BOX_COLOR || 'black';
  var cookie = req.cookies.cookieName;
  if (cookie === undefined) {
    // no: set a new cookie
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
  } else {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  } 
  
  res.render('index', { title: 'Box Demo', boxcolor: color, hostName: hostName });
});

module.exports = router;
