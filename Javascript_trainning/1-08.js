//객체
//하나의 변수의 여러개의 값을 넣을 수 있다.
//value에 들어갈 수 있는 타입은 제약이 거의 없다. 함수도 들어갈 수 있다.

//1. 기본적인 객체 생성 방법
let person ={
    name : "홍길동",
    age : 30,
    gender : "남자",
    action : (x, y) => x + y
}

//2. 생성자를 활용함 생성 방법
function Person(name, age, gender)
{
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let p = new Person("길동", 30, "남자");

//3. 객체 메소드 : 객체가 가진 여러가지 기능
console.log(p.name);
let keys = Object.keys(p);
console.log(keys);

let values = Object.values(p);
console.log(values);

//entries : key와 values를 묶어서 배열로 반환해준다.(2차원 배열)
let entries = Object.entries(p);
console.log(entries);

//객체 복사 assing(복사할곳, 복사할것)
let newPerson = {};
Object.assign(newPerson, p);
console.log(newPerson);

//특정 값만 바꾸기
Object.assign(newPerson, p,{gender : "없음"});
console.log(newPerson);


//person과 내용이 같은게 과연 같은 객체일까? -> no
//객체는 다른 데이터 타입과 달리 크기가커서 메모리에 저장할 때 별도의 공간에 저장한다.
//person과 person2는 서로 다른 주소값을 같기 때문에 같은 객체라고 할 수 없다.
let person2 ={
    name : "홍길동",
    age : 30,
    gender : "남자",
    action : (x, y) => x + y
}

console.log(person === person2);

//JSON.stringify시키면 서로 같은거긴함 둘다 string화 하는거기 떄문에
console.log(JSON.stringify(person) === JSON.stringify(person2));

//객체 병합
//{}와 ...을 활용한다
let person3 = {
    moneny : 10000
}

let mergePerson = {...person2, ...person3};
console.log(mergePerson);