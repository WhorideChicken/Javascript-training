//Promise, Generator(ES6), async/await(ES7)

new Promise(function (resolve, reject) {
    setTimeout(function () {
        let name = "name"
        console.log(name);
        resolve(name);
    }, 500);
}).then(function (prevName) {
    //성공했을 시
}).catch()
{
    //실패했을 시
}

//리팩토링
var addCoffee = (name) => {
    return function (prevName) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                let newName = prevName ? `${prevName}, ${name}` : name;
                console.log(newName);
                resolve(newName);
            }, 500);
        });
    };
};

addCoffee("에스프레소")().then(addCoffee("아메리카노"));