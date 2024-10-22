//Set
const mySet = new Set();

mySet.add('value1');
mySet.add('value2');
//같은 값을 추가하면 중복되어 추가 되지 않는다.
mySet.add('value2');
mySet.add('value3');
mySet.add('value6');
mySet.add('value7');
console.log(mySet.size);
console.log(mySet.has('value1'));

//map도 마찬가지로 for of로 반복을 할 수 있다.

for(const value of mySet.values())
{
    console.log(value);
}