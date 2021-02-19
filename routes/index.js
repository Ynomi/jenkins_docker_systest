var express = require('express');
var router = express.Router();

var path = require("path");
const calcs = require(path.join(__dirname,'../functions/calcs.js') );


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '掛け算計算機' });
});

router.post('/', (req, res, next) => {  
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  var outStr = num1 + " X " + num2 + " = ";
  var result = num1 * num2;

  res.render('index', {
    title: '計算結果',
    num1: num1,
    num2: num2,
    output1: outStr,
    output2: result,
  });
});

module.exports = router;
