//함수를 갖고있는 객체의 함수를 콜백함수로 넘겨주는것은
//js 엔진 관점에서 this는 해당 객체가 아닌 매개변수로 함수 자체를 넣어준것으로
//globald이 된다. but 아래이 logValues가 화살표 함수면 호출 객체가 this가 된다.

let obj ={
    vals : [1,2,3],
    logValues : function (x,y){
        if(this === global)
            console.log("global");
        else
            console.log(this, x, y);
    }
};

[4, 5, 6].forEach(obj.logValues);