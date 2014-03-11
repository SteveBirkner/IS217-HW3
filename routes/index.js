
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
	if (op == '+') {
		var ans = math.add(num1,num2);
	} else if (op == '-') {
		var ans = math.subtract(num1,num2);
	} else if (op == '*') {
		var ans = math.multiply(num1,num2);
	} else {
		var ans = math.divide(num1,num2);
	}
	res.render('answer', { title: 'Answer', answer: ans });
};