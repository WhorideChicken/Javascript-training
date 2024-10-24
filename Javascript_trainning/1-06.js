//조건문 : if, switch 
//기존의 언어들과 사용법은 같다.

let x = -1;
if(x>50)
    console.log("5보다 큼");
else if(x>0)
    console.log("0보다 큼")
else if(x<0 && x===-1)
    console.log("-1 이네?");
else
    console.log("음수였네?");

let y = "Hello World!";
if(y.length >= 5)
    console.log("5보다 길이가 길다");

let num = 1;

switch(num)
{
    case 1:
        console.log("1이다");
        break;
    case 2:
        console.log("2이다");  
        break;
    case 3:
        console.log("3이다");
        break;
}

//조건부 실행
x < 0 && console.log("0보다 작다");

//삼항 연산자와 단축평가
let result; //result는 undefined
let z = result || 20;
console.log(z);
//해설 : result가 undefined면 z는 20으로 할당해줘라는 의미
