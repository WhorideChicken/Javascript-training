//call apply bind 응용
function Student(name, gender, school)
{
    this.name = name;
    this.gender = gender;
    this.school = school;
}

function Employee(name, gender, company)
{
    this.name = name;
    this.gender = gender;
    this.school = company;
}

//비슷한 동작을 하는 두개의 생성자를 call을 활용해서 간단히 묶어보자
function Person(name, gender)
{
    this.name = name;
    this.gender = gender;
}

function Student(name, gender, school)
{
    Person.call(this, name, gender);
    this.school = school;
}

function Employee(name, gender, company)
{
    Person.call(this, name, gender);
    this.school = company;
}

var kd = new Student("길동", "male", "서울대");
var ks = new Employee("길동", "male", "tkatjd");
