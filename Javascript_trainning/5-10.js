//아래의 결과는 1이 뜬다.
//스코프 console.log에서 소코프 밖에서 x를 찾을 때 전역 변수를 바라보기 때문
//즉 outerFunc과 innerFunc는 서로 다른 스코프를 가지고 있다.
//JS는 어디서 호출 했는지가 아니라 어디에 정의 되었는지에 따라서 스코프를 결정한다.[렉시컬 스코프]
const x = 1;

function outerFunc(){
    const x = 10;
    innerFunc();
}

function innerFunc(){
    console.log(x);
}

outerFunc();