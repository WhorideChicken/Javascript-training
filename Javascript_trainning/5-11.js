const x = 1;

function outer(){
    const x = 10;
    const inner = function(){
        console.log(x);
    }

    return inner;
}

//outer()를 실행하서 innerFunc에 담는다. ()가 있으면 실행한것
//ounter return 부분을 innerFunc에 담은것이다.
const innerFunc = outer();
//즉여기서 outer()의 실행컨텍스트는 사라진다.
//inner()안에는 x가 있고 x는 outer 실행컨텍스트에 있다.
//outer는 실행하고 사라졌는데 inner에서 x를 참조할 수 있다 -> 클로저

innerFunc();