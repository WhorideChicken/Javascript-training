//es6-2
//단축 속성명 : property shothand
const name = "Simson";
const newAge = "30"

//key - value pair 형태이므로
//key와 value의 명칭이 같으면 아래와 같이 하나로 생략이 가능하다.
const person ={
    name,
    age : newAge
}

console.log(person.name);

//전개구문
//안의 있는 요소가 전개 된다.
let arr = [1,2,3];
console.log(arr);
console.log(...arr);

//기존의 구조를 벗고 새로운 구조로 들어갈 때 사용
let newArr =[...arr];
console.log(newArr);

//객체에서도 활용가능
let user ={
    name : "Jin",
    age : 30
}

let user2 = {...user};

//기존의 객체를 다 풀치고 다시 묶어서 새로 만들 수 있다.


//나머지 매개면수 (rest parameter)
//매개변수의 전체 갯수를 모를 때 사용 ...args
function exmapleFunc(a,b,c){
    console.log(a, b, c);
}

exmapleFunc(1,2,3);

function exmapleFunc2(a,b,c,...args){
    console.log(a, b, c);
    console.log(args);
    console.log(...args);
}
exmapleFunc2(1,2,3,4,5,6,7,8,9,10,11,2,3);

//템플릿 리터럴
//""보다 확장 된 기능으로 string혹은 문자열 출력 안에 js 코드를 넣을 수 있다.
const testMessage = "test"
console.log(`Hello ${testMessage} World`);

//멀티 라인을 지원한다.
console.log(`Hello 
    ${testMessage} 
    World`);