//클로저
//아래의 출력은 10이 나온다.
//innerFunc 내부에 x를 먼저 찾고 없으니 밖으로 나가서 찾는다. 그걸 하는게 outer
//밖에 x : 10이 있어 안에서 밖으로 나가면서 값을 찾는것 : 스코프 체이닝
const x = 1;

function outerFunc(){
    const x = 10;
    function innerFunc()
    {
        console.log(x);
    }

    innerFunc();
}


outerFunc();