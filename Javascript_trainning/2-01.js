//es6 문법
//구조분해할당 destructiring


let [value1, value2] = [1, "new"];
console.log(value1);
console.log(value2);

let arr = ["a","b", "c"]
let [a,b,c] = arr;

//갯수가 매칭 되지 않으면 g는 undefined가 뜬다.
let [d,e,f,g] = arr;
//갯수가 매칭 되지 않을경우 k는 4가 되고 매칭되면 매칭되는 값이 들어간다.
let [h,i,j,k=4] = arr;

//객체의 경우
let user ={
    name : "name",
    age : 30
}

let {name, age} = user;
console.log(name);
console.log(age);

let {name2, age2} = {
    name : "name",
    age : 30
}

let { name : newName, age : newAge } = user;