//명시적 this binding
//call, aply, bind

var func = function(a,b,c){
    console.log(this, a,b,c);
}

func(1,2,3);

//명시적 binding : call(맨앞의 객체)
//맨앞의 객체가 주체가 된다.
//call은 this로 붙을 객체를 붙여주면 된다.
//맨 앞에 this가 될 객체를 전달한다고 보면 된다.
func.call({x : 1}, 4,5,6);

var obj = {
    a : 1,
    method : function(x, y){
        console.log(this.a, x, y);
    }
}

obj.method(2,3);
obj.method.call({a : 4}, 5, 6);

//apply는 완전히 똑같으나 뒤에 있는 매개변수를 []로 묶는다.
func.apply({x:1}, [1,2,3]);
obj.method.apply({a : 4}, [5, 6]);