//변수에 함수 할당 가능
let hello = function(){
    console.log("Hello");
}

let hellonum = function(x){
    console.log("Hello " + x);
}
//함수를 인자로 다른 함수에 전달 할 수 있다.
//콜백 처럼 사용할 수 있음 : C#의 action, delegate와 같음
function callFunction(func)
{
    func();
}

hello();
hellonum(3);
callFunction(hello);

//매개변수가 있는 함수를 매개변수로 넘길땐 화살표 함수를 써야한다
callFunction(()=>hellonum(5));


//함수를 반환하기
function creatorAdd(num){
    return function(x){
        return x *num;
    };
}

let first = creatorAdd(5);
console.log(first(10));

//객체로 다뤄보자 : 객체안에 함수가 포함 될 수 있다.
//화살표 함수를 하면 this.name이 unidefined가 뜬다 : => 함수는 this를 바인딩하지 않는다.!
let person = {
    name : "Json",
    age : 30,
    sayHello2 : function(){
        console.log(`${this.name}: Hello`);
    },
    sayHello : ()=>{
        console.log(`${this.name}: Hello`);
    }
}

person.sayHello2();
person.sayHello();

const myArr = [
    function(a, b)
    {
        return a + b;
    },
    function(a, b)
    {
        return a - b;
    }
]

console.log(myArr[0](1,3));
console.log(myArr[1](1,3));

function multiplayBy(num)
{
    return function(x){
        return x * num;
    };
}

function add(x, y)
{
    return x + y;
}

const mutlTwo = multiplayBy(2);
const mutlThree = multiplayBy(3);

console.log(add(mutlTwo(3),1));
console.log(add(mutlThree(3),1));
console.log(add(mutlTwo(5), mutlThree(10)));