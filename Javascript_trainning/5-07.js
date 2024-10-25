//상속 실습 : Car를 상속하는 전기차 클래스를 만들어라
class Car{
    constructor(modelName, modelYear, type, price)
    {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    //메서드에 따로 function을 붙이지 않는다
    makeNoise() {
        console.log(`${this.modelName} clacktion`);
    }

    printYear()
    {
        console.log(`${this.modelYear} clacktion`);
    }
}

class ElectironicCar extends Car{
    //constructor도 재정의가 가능하다
    constructor(modelName, modelYear, price, chargeTime)
    {
        //부모 클래스에게도 알려주기
        super(modelName, modelYear, "e", price);
        this._chargeTime = chargeTime;
    }

    get chargeTime()
    {
        return this._chargeTime;
    }

    set chargeTime(value)
    {
        this._chargeTime = value;
    }
}

const myCar = new ElectironicCar("테슬라","2012",5000, 200);
myCar.makeNoise();
console.log(`${myCar.chargeTime}`);