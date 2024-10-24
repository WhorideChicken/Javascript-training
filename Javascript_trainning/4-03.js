let obj = {
    name : "obj",
    func : function(){
        var self = this;
        return function(){
            console.log(self.name);
        };
    }
};

//=> 구린 방법
let obj1 = {
    name: "obj",
    func: function () {
        return function () {
            console.log(self.name);
        };
    }
};

//=> 가장 좋은 방법
//bind를 하는 방법
let obj2 = {
    name : "obj2",
    func : function(){
            console.log(this.name);
    }
};

setTimeout(obj2.func.bind(obj2),3000);

//다른 객체를 bind를 하면 obj1으로 this를 할 수도 있다.
setTimeout(obj2.func.bind(obj1),3000);

setTimeout(()=>{
    console.log("is it First ?? -1");    
},1000);
console.log("is it First ?? -2");