//상속
//클래스간 부모 >-> 자신 관계를 가짐
class Animal{
    constructor(name){
        this._name = name;
    }

    speak()
    {
        console.log(`${this._name}이(가) 말한다`);
    }
}

const me = new Animal("나");
me.speak();

//상속 키워드 extends 부모 클래스 이림
//상속 받으면 constructor를 써줄 필요가 없다.
class Dog extends Animal{
    //부모에게 내려받은 메서드를 재정의할 수 있다.
    //오버라이딩
    speak()
    {
        console.log(`${this._name}이(가) 짖는다.`);
    }
}

const dog = new Dog("술취한 나");
dog.speak();
