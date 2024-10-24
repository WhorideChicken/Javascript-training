//제너레이터 및 async/await
//제너레이터 : 반복할 수 있는 이터레이터를 생성한다.
//이터레이터는 netx를 갖고 있어 하나씩 순환할 수 있다.
//yield를 통해서
//yield를 만나면 멈추고 해당 동작이 끝날 때 까지 멈췄다가 끝나면 다음으로 넘어간다.

var addCoffee = function(preName, name){
    setTimeout(function(){
        conffeeMaker.next(preName ? preName + ", "+name : name);
    }, 500);
}

var coffeeGenerator = function* (){
    var espresso = yield addCoffee("", "에스프레소");
    console.log(espresso);
    var americano = yield addCoffee(espresso, "아메리카노");
    console.log(americano);
    var mocha = yield addCoffee(americano, "카페모카");
    console.log(mocha);
}

var conffeeMaker = coffeeGenerator();
//conffeeMaker.next();

//async/await

var addCoffe2 = function(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name);
        }, 500);
    })
};

//async를 function 앞에 붙이고
//awiat를 만나면 해당 메서드가 끝날 때 까지 기다려야하는데
//만난 함수는 무조건 Promise를 반환해야한다.
var conffeeMaker2 = async function () {
    var coffeeList ="";
    var _addCoffee = async function (name) {
        coffeeList += (coffeeList ? ", " : "") +(await addCoffe2(name));
    };

    await _addCoffee("에스프레소");
    console.log(coffeeList);
    await _addCoffee("아메리카노");
    console.log(coffeeList);
    await _addCoffee("카페모카");
    console.log(coffeeList);
    await _addCoffee("카페라테");
    console.log(coffeeList);
}

conffeeMaker2();