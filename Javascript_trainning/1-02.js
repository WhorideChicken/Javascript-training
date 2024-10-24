//형 변환
// 명시적 형 변환, 암시작 형 변환

//1. 암시적 형변환 : 개발자가 명시 하지 않아도 자동으로 형이 변환된다.
// + 연산으로 문자와 숫자가 만나면 문자열이 된다.
// 문자열과 다른 데이터 타입이 + 만나면 문자열로 형변화로 우선으로 바뀐다.
let result = 1 +"2";
console.log(result);
console.log(typeof result);

result += true;
console.log(result);
console.log(typeof result);


//+ 연산자가 아닌 -, *이 이뤄지면 숫자로 암시적으로 형 변환이 일어난다.
let result2 = "2" * 3;
console.log(result2);
console.log(typeof result2);

let result3 = "9" * "8";
console.log(result3);
console.log(typeof result3);

let result4 = 1 - "4";
console.log(result4);
console.log(typeof result4);

//명시적 형변환
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log("-----------------------");
console.log(Boolean("false"));
console.log(Boolean({}));

console.log("-----------------------");
console.log(String(0));
console.log(String(""));
console.log(String(null));
console.log(String(undefined));
console.log(String(NaN));

console.log("-----------------------");
let result5 = Number("1234");
console.log(result5);
console.log(typeof result5);