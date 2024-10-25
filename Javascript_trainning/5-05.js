//기존의 car class를 추가 요구사항을 붙여 getters setter를 실습
//modelName, modelYear, type, price를 셋팅 가져오는 메서드를 만들자.
class Car{
    constructor(modelName, modelYear, type, price)
    {
        this._modelName = modelName;
        this._modelYear = modelYear;
        this._type = type;
        this._price = price;
    }

    //메서드에 따로 function을 붙이지 않는다
    makeNoise() {
        console.log(`${this.modelName} clacktion`);
    }

    printYear()
    {
        console.log(`${this.modelYear} clacktion`);
    }

    get modelName()
    {
        return this._modelName;
    }

    set modelName(value)
    {
        this._modelName = value;
    }

    get modelYear()
    {
        console.log("call");
        return this._modelYear;
    }

    set modelYear(value)
    {
        this._modelYear = value;
    }

    get type()
    {
        return this._type;
    }

    set type(value)
    {
        this._type = value;
    }

    get price()
    {
        return this._price;
    }
    
    set price(value)
    {
        this._price = value;
    }
}

const myCar = new Car("소나타","1990","세단", 3000);
//getters
console.log(`${myCar.modelName}`);
//setters
myCar.modelName = "람보르기르니";
console.log(`${myCar.modelName}`);
