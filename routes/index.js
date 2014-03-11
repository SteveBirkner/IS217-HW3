
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Calculator' });
};

exports.calc = function(req, res){
	console.log(req.body);
	res.render('answer', { title: 'Answer'});
};