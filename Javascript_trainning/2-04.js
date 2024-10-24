//Map : Key - Value pair를 저장한다.
//Key에 어떤 데이터 타입도 들어올 수 있다.
//Map은 키가 정렬된 순서로 저장되기 때문에 가능하다.
//검색, 삭제, 제거, 여부 확인을 제공한다.

//반복을 위해 Keys, values, entries를 기억해두자
const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

for (const key of myMap.keys()) {
    console.log(key);
}

for (const value of myMap.values()) {
    console.log(value);
}

for (const ent of myMap.entries()) {
    console.log(ent);
}

//Map의 크기
console.log(myMap.size);

//key 기반 검색으로 해당 value가 있는지 검색
console.log(myMap.has("two"));
