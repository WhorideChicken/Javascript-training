//콜백 함수
//1. 호출 시점

//반복해서 매개변수로 받은 콜백함수를 실행
let count = 0;
let countFunc = function () {
    console.log(count);
    if (count > 4)
        clearInterval(timer);
    count++;
}

var timer = setInterval(countFunc, 300);

//2. 인자에 대한 제어권
//Map함수 활용하자
//기존 배열을 순회하며 새로운 배열을 만드는 함수
//map함수는 reuturn이 없으면 undefined를 크기만큼 할당함다.
//map(값, 인덱스)
let newArry = [10, 20, 30].map((currentValue, index) => {
    console.log(currentValue, index);
    return currentValue + 5;
});

console.log(newArry);

//this 콜백 함수도 함수이기 때문에 기본적으로 this가 전역객체를 참조한다.
//제어권을 검겨받을 코드에서 콜백함수에 별도로 this가 될 대상을 지정한 경우 그 대상을 참조한다.

//map은 콜백함수를 받는다. 2번째 인자로 this를 받는다.
Array.prototype.myMap = function (callback, thisArg) {
    console.log("hello");
    //리턴할 배열
    let mappedArr = [];

    //this.length -> this 는 호출 주체 아래 코드에서[1,2,3]
    for (let i = 0; i < this.length; i++) {
        let value = callback.call(thisArg || global, this[i]);

        mappedArr[i] = value;
    }
    return mappedArr;
};

let newArr = [1, 2, 3, 4].myMap((num)=>{
    return num*2;
});

console.log(newArr);