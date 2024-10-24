var user = {
    name: "john",
    age: 20,
}

var getAged = function (user, passedTime) {
		// 여기를 작성해 주세요!
        //쉽게 표현
        let newUser = { name : user.name, age : user.age + 6};

        //좀 더 나이스한 표현
        let newUser2 = {};

        for(data in user)
        {
            newUser2[data] = user[data];
        }

        newUser2.age += 6;

        console.log(newUser);
        console.log(newUser2);
        
        return newUser;
}


var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
    if (!user2) {
		    console.log("Failed! user2 doesn't exist!");
	  } else if (user1 !== user2) { 
        console.log("Passed! If you become older, you will be different from you in the past!")
    } else {
        console.log("Failed! User same with past one");
    }
}

agedUserMustBeDifferentFromUser(user, agedUser);

///////////////
var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
        }
    },

    getName: function() {
        return this.fullname;
    },

    //화살표 함수 : this 바인딩 무시 상위의 this Ciryl
    getFirstName: () => {
        return this.fullname.split(' ')[0];
    },

    //클로져 개념이 필요함
    //()호출이 아닌 .getLastName를 했기 때문에 직접 호출까지 한것이기 때문에 호출의 주체는 없다(즉시실행함수)
    //this는 전역 객체가 된다.
    getLastName: (function() {
        return this.fullname.split(' ')[1];
    })()

}

//Francis Ngannou vs John Jones
//John Jones vs Ciryl Gane
console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);