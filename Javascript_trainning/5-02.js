//class
class Person{
    //class를 구성하는 필수 요소는 constructor(생성자)에 넣는다
    //constructor 매개변수에 필수로 넣어야하는 값을 넣는다.
    //
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //메서드는 동사 위주로 쓴다.
    sayHello(){
        console.log(`${this.name} hello`);
    }
}

//new 연산을 통해 인스턴스를 만든다.
const person1 = new Person("홍길동", 30);
const person2 = new Person("홍길순", 10);

person1.sayHello();
person2.sayHello();