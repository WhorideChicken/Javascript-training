//bind 매서드
//call과 apply는 즉시 호출하는 대신 bind는 즉시 호출하지 않고 새로운 함수를 리턴한다.
//목적 : 
//1. 함수의 This를 미리 적용한다.
//2. 부분 적용 함수

var func = function(a,b,c,d){
    console.log(this,a,b,c,d);
}

func(1,2,3,4); //이렇게 넣으면 this는 global이 뜬다

//함수에 미리 this를 적용해보자
var bindFunc1 = func.bind({x:1});
bindFunc1(5,6,7,8);

//부분 적용 함수 : 매개변수를 미리 선언해주는 방법
var bindFunc2 = func.bind({x:1},4,5);
bindFunc2(7,8);

//name 프로퍼티
//'bound' - bind의 수동태 : name을 출력해서 바인드 되었는지 미리 알 수 있다.
console.log(func.name);
console.log(bindFunc1.name);
console.log(bindFunc2.name);

//call보다 bind가 더 많이 쓰인다