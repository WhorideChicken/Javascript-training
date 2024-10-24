//호이스팅 전
console.log(sum(1,2));
console.log(multiply(3,4));

function sum(one, two)
{
    return one + two;
}

var multiply = function (one, two){
    return one * two;
}


//호이스팅 후
function sum(one, two)
{
    return one + two;
}

var multiply ;

console.log(sum(1,2));
console.log(multiply(3,4));


multiply = function (one, two){
    return one * two;
}


var a = 1;
var outer = function() {
	var inner = function() {
		console.log(a); 
		var a = 3;
	};
	inner();
	console.log(a); 
};
outer();
console.log(a); 