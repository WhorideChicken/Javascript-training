console.log(this);

var obj1 = {
	outer: function() {
		console.log(this); // (1) => 메서드 this
		var innerFunc = function() {
			console.log(this); // (2) => 함수로서의 this
		}
		innerFunc();

		var obj2 = {
			innerMethod: innerFunc
		};

		obj2.innerMethod(); //(3) => 메서드 this obj의
	}
};
obj1.outer();