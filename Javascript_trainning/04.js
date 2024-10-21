//함수 function
//정의 키워드 funcion() 함수명 {}
//키워드만 다르고 타언어들과 같이 사용
//리턴형을 따로 선언하지 않아도 된다?
function add()
{

}

function add(a, b)
{
    let result =  a + b;
    return result;
}

let addResult = add(3, 5);
console.log(addResult);

//함수 표현식
//위의 add 함수와 같은 역할을 하지만 선언과 동시에 값을 할당한다.
let add2 = function(x, y){
    return x +y;
}

let addResult2 = add2(5, 0);
console.log(addResult2);