//유사배열
//하지만 배열의 내장 함수는 사용이 불가능하다.
var obj = {
    0 : 'a',
    1 : 'b',
    2 : 'c',
    length : 3
}

//ES6엣 Arra.from이 등장했다.
var arr = Array.from(obj);
console.log(arr[2]);
