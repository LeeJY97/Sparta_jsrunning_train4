class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`저의 이름은 ${this.name} 나이는 ${this.age} 입니다.`)
    }
}

const jung = new Person("yuno", 20)
jung.info();


class Student extends Person {
    constructor(name, age, study) {
        super(name, age);
        this.study = study;
    }

    info() {
        console.log(`${this.study}를 배우고 있는 ${this.age}살 ${this.name}입니다.`)
    }
}

const student1 = new Student("준현", 12000, "javascript");
student1.info();



class Tutee extends Person {
    constructor(name, age, study) {
        super(name, age);
        this.study = study;
    }

    info() {
        console.log(`저의 이름은 ${this.name} 나이는 ${this.age} 현재 ${this.study}를 학습하고 있습니다`)
    }
}

const tutee = new Tutee("준열", 20, "javascript");
tutee.info();





