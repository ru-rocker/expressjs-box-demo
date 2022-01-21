var express = require('express');
var os = require('os');
const fs = require('fs');

var router = express.Router();
const hostName = os.hostname();

/* GET home page. */
router.get('/', function(req, res, next) {
  let color = process.env.BOX_COLOR || 'black';
  let dir = process.env.DIR || '/tmp';
  let fn = process.env.FILENAME || 'testfile.txt';

  var fileContents;
  try {
    fileContents = fs.readFileSync(dir + '/' + fn, 'utf8');
  } catch (err) {
  }

  res.render('index', { 
    title: 'Box Demo', 
    boxcolor: color, 
    fileContents: fileContents,
    dir: dir,
    hostName: hostName });
});

module.exports = router;
