//최대 최소를 구하는 법
var nubers = [10,20,3,16,45];
var max = min = nuber[0];

nubers.forEach(function(num){
    if(num > max)
    {
        max = num;
    }

    if(num < min)
    {
        min = num;
    }
});

//apply를 사용해보자
var maxApply = Math.max.apply(null, nubers);
var maxApply = Math.min.apply(null, nubers);

// spread operator : ...
console.log(...nubers);
var maxSpread = Math.max.apply(...nubers);
var maxSpread = Math.min.apply(...nubers);
