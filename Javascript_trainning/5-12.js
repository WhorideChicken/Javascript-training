//카운트 상태 변경 함수 #1
//함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를 구현한다.

let num = 0;

const increase = function(){
    return ++num;
}

//num이 은닉되지 않아서 외부에서 바로 수정할 수 있게 된다.

//보완해야할 사항
//1. num 변수값은 increase함수가 호출되기 전까지 변경되지 않아야한다.
//2. incrase함수만이 변경 가능하게 해야한다.
//3. 전역변수 num이 문제다.
//4. 클로저를 활용하여 해결한다.
//5. ()앞에 (function(){}) 형태가 오면 클로저인가보다 하고 생각해야한다.
const closureIncrease = (function (){
    let num = 0;

    return function()
    {
        return ++num;
    }
})();

console.log(closureIncrease());
console.log(closureIncrease());

//위코드가 실행 되면 즉시 실행함수가 호출된다.
//()앞의 (function(){})이 즉시 실행함수고 이건 함수를 반환한다.
//해당 리턴은 closureIncrease변수에 할당 된다.
//closureIncrease는 자신이 정의된 위치에서 의해서 결정된 상위 스코프인 즉시 실행 함수의 
//렉시컬 환경을 기억하는 클로저이다 : let num을 기억한다는 뜻
//즉시 실행함수 -> 즉시 소멸
// 결론 : num은 호출 될 때마다 초기화도 안되었고 외부에서 접근 못하게 은닉되어 의도되지 않은 변경도
//걱정할 필요가 없었다
//js는 프로퍼티가 없나?


