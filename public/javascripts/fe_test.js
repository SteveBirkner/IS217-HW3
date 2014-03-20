test("Doesn't display / displays answer based on URL", function() {
	equal(true, properAnswer());
	function properAnswer() {
		var qunit = document.getElementById("qunit-fixture").getElementsByTagName("p");
		var ans = qunit[1].innerHTML;
		console.log(ans);
		if (location.href == 'http://stevenbirkner.com:3000/calc') {
			if (ans != null) {
				return true;
			}	
			return false;
		} 
		if (ans == '') {
			return true;
		}
		return false;

	}
});

