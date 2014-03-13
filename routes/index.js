
/*
 * GET home page.
 */
var math = require("../public/javascripts/math.js");

exports.index = function(req, res){
  res.render('index', { title: 'Calculator' });
};

exports.calc = function(req, res){
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);
	var op = req.body.op;
  var ans;
	if (op == '+') {
		ans = math.add(num1,num2);
	} else if (op == '-') {
		ans = math.subtract(num1,num2);
	} else if (op == '*') {
		ans = math.multiply(num1,num2);
	} else {
		ans = math.divide(num1,num2);
	}
	res.render('index', { title: 'Calculator', answer: ans });
  ans = null;
};

exports.test = function(req,res){
  res.render('test', { title: 'Calculator'});
};
