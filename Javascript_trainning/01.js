//데이터타입
//javascript는 코드를 작성할 때가 아닌, 실제 코드가 실핼 될 때 데이터 타입이 결정 된다.
console.log("Hello World!");

let str = "Hello World";

console.log(str);
console.log(typeof str);

console.log(str.length);

let str2 = "good";
let result = str.concat(str2);

console.log(result);

//시작 위치부터 몇개까지
console.log(str.substr(7,5));
//시작 위치부터 어디까지
console.log(str.slice(7, 12));

//World가 시작된 지점을 리턴
console.log(str.search("World"));

let result2 = str.replace("Hellow","Javascript");
console.log(result2);

let str6 ="apple, banana, kiwi";
let result3 = str6.split(",");
console.log(result3);


var a = 10; //기본형
var obj1 = { c:10, d: 'ddd'} //참조형

var b = a;
var obj2 = obj1;