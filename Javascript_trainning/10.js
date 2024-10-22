//반복문 : for, while
//for : 기존의 C,C++, C#과 거의 유사하게 사용
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let numArray = [0, 1, 3, 45, 6, 7, 234, 4, 55, 6, 9];

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
}

//0부터 0까지 2의 배수만 출력
for (let i = 1; i < 11; i++) {
    if (i % 2 === 0)
        console.log(i);
}

//for ~ in문 : 객체 속성을 다루는 문법
let person = {
    name: "jin",
    age: 30,
    gender: "male"
}

for (let key in person) {
    console.log(key);
    console.log(person[key]);
}

//while : 기존의 언어들과 사용법 같음
//while을 활용하여 3초과 100미만의 숫자중 5의 배수인것만 출력
let j = 0;
while (j < 100) {
    if (j > 3 && j < 100) {
        if (j % 5 === 0)
            console.log(j);
    }

    j++;
}

//do while : 일단 한 번은 실행한다.
let k = 0;

do {
    console.log(k);
    k++;
} while (k < 10);

//break; continue
//break : 해당 조건이 되면 루프문 탈출
for (let i = 0; i < 10; i++) {
    if (i === 5)
        break;
    console.log(i);
}

//continue : 해당 조건 만나면 다음 루프로 건너뜀
for (let i = 0; i < 10; i++) {
    if (i === 5)
        continue;

    console.log(i);
}