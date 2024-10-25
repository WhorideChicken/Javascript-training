//getters setters
//객체지향 프로그래밍 언어에는 대부분 getters, setters가 있다.
//height와 width를 외부에서 사용하고 내부에서 셋팅도 해야한다.

class Rectangle
{
    constructor(height, width)
    {
        this._height = height;
        this._width = width;
    }

    get width(){
        return this._width;
    }

    //this.의 값을 바꾸면 set함수가 호출 된다.
    //결국 무한적으로 루프를 돌게 된다.
    //이러한 오류를 막기 위해 this._ 를 붙이기로 했다.
    //_는 보통 코딩 세계에서 private를 뜻한다.
    //즉 _가 붙으면 인스턴스 내에서만 쓰기로 분리한다는 뜻
    set width(value){
        if(value <= 0){
            console.log("0 보다 커야합니다.");
            return;
        }
        else if(typeof value !== "number"){
            console.log("숫자를 넣어야합니다.");
            return;
        }

        this._width = value;
    }

    get height(){
        return this._height;
    }

    set height(value){
        if(value <= 0){
            console.log("0 보다 커야합니다.");
            return;
        }
        else if(typeof value !== "number"){
            console.log("숫자를 넣어야합니다.");
            return;
        }
        this._height = value;
    }

    getArea()
    {
        console.log(`${this._height * this._width} 입니다.`);
    }
}

const rect = new Rectangle(3,4);
rect.getArea();


