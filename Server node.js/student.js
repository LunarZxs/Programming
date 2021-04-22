class Student {
    constructor() {
        this.name = 'John';
        this.gender = 'M';
    }
    sayHi() {
        alert("Hi");
    }
    toString() {
        return `${this.name} gender is ${this.gender}`;
    }
}



var studObj = new Student();

console.log(studObj.name.toString())
console.log(studObj.toString())

