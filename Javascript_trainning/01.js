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