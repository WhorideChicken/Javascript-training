//배열

//1. 생성
let color = ["red","blue","green"];

//2.크기 지정
let num1 = new Array(5);

//3.크기 출력
console.log(num1.length);

//4. 요소 접근
console.log(color[0]);


//5. 요소 관리 
//push : 맨뒤에 요소를 넣음
//pop : 맨뒤의 요소를 뺌
//shift : 맨앞의 요소를 뺌
//unshift : 맨앞에 "요소" 값을 붙임
num1.push(5);
num1.push(3);
num1.push(2);
num1.push(10);
num1.push(11);
console.log(num1);
num1.pop();
console.log(num1);
num1.shift();
console.log(num1);
color.unshift("blue");
console.log(color);

//splice : 위치를 지정해서
//시작점, 지울 갯수, 지워진 자리에 들어갈 요소
color.splice(0,2,"aqua");
console.log(color);

//slice : 요소 ~ 요소 까지의 요소들로 새로운 배열을 만든다.
let sliced = color.slice(1,3);
console.log(sliced);

//forEach, map, filter,find
let numbers =[1, 2, 3, 4, 5];

//forEach : 순환
//매개변수자리에 함수를 넣는것 -> 콜백함수
numbers.forEach((item)=>{
    console.log(item);
});

//map : 배열의 내용을 가공해서 새로운 배열로 만드는것
let newnumbers = numbers.map((item)=>{
    return item *2;
});

console.log(newnumbers);

//filter 조건을 걸어 해당 조건의 배열을 리턴하는 함수
let filterNum = numbers.filter((item)=>{
    return item < 5;
});

console.log(filterNum);

//find : filter와 다르게 조건에 해당하는 첫번째 요소 1개만 반환한다.
let findNum = numbers.find((item)=>{
    return item > 3;
});

console.log(findNum);