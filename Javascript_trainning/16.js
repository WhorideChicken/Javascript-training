//기본형, 참조형의 복사(메모리 관점)의 예제

var user ={
    name : "Jhon",
    gender : "male"
}

var changeName = function(user, newName){
    var newUser = user;
    newUser.name = newName;
    return newUser;
}

//1번 방법 : 안타깝지만 최선은 아니다
//매개변수가 적어 gender 같은 경우 하드 코딩을 하였으나 내용이 많아지게 되면?
var changeObject = function(user, newName){
    var newUser = { name : newName, gender : user.gender};
    return newUser;
}

//2번 방법 : 얕은 복사
var copyObject = function(target)
{
    var result = {};

    for(var prop in target)
    {
        result[prop] = target[prop];
    }

    return result;
}

//3번 얕은 복사도 결국 한계가 있다 
//바로 하위 단계만 복사가 가능하고 중첩 객첵의 경우 복사가 어렵다.
//깊은 복사 : 재귀를 활용해서 안에 있는 모든 요소를 복사한다.
var deepUser = {
	name: 'kkk_2',
	urls: {
		portfolio: 'http://github.com/abc',
		blog: 'http://blog.com',
		facebook: 'http://facebook.com/abc',
	}
};

var copyDeep = function(target)
{
    var result = { };
    if(typeof target === 'object' && target !== null){
        for(var prop in target)
            result[prop] = copyDeep(target[prop]);
    }
    else{
        result = target;
    }

    return result;
}

var user2 = changeName(user, "kkk");
var user3 = changeObject(user, "kkk");

if(user !== user2){
    console.log("유저 정보다 서로 다릅니다.");
}

console.log(user.name, user2.name);
console.log(user ===  user2);

console.log(user.name, user3.name);
console.log(user ===  user3);

//얕은 복사
var user4 = copyObject(user);
user4.name ="simson";
user4.gender = "NaN";

console.log(user.name, user4.name);
console.log(user ===  user4);


var deepUser2 = copyDeep(deepUser);

deepUser2.urls.blog ="없지롱";
console.log(deepUser);
console.log(deepUser2);
