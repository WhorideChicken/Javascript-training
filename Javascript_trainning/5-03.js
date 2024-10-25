//클래스 연습
//요구사한
//Car 클래스를 만들어라
//생성자 : modelName, modelYear, type, price
//makeNoise()메서스로 클락션 추가
//3개정도 만들어 보자

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

const newCar1 = new Car("소나타","1990","세단", 3000);
const newCar2 = new Car("그렌져","2023","세단", 1000);
const newCar3 = new Car("다마스","1990","트럭", 3000);

newCar1.makeNoise();
newCar2.makeNoise();
newCar3.makeNoise();

newCar1.printYear();
newCar2.printYear();
newCar3.printYear();