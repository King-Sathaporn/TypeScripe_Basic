//? Basic OOP

//Create a class
class Point {
    //Create fields
    x?: number; //? add ? to make it optional
    y: number = 0; //? add = 0 for default value
}

const point = new Point();
point.x = 1;
point.y = 2;
console.log(point);
console.log(point.x, point.y);
console.log(`${point.x}---${point.y}`);//? template string

/*---------------------------------------------------------------------*/

class Point2 {
    //Create constructor
    x: number;
    y: number;
    readonly version: string = "1.0.1"; //? We can add readonly to make it readonly.
    constructor(x: number = 0,y: number = 0) { //? We can add default values to the constructor
        this.x = x;
        this.y = y;
    }
}

const point2 = new Point2(1,2);
console.log(point2);
console.log(point2.x, point2.y);
console.log(`${point2.x}---${point2.y}`);
console.log(point2.version);

/*---------------------------------------------------------------------*/

class Point3 {
    _x: number = 0; //? We can add _ to make it private
    get x(): number {
        return this._x = this._x+1;
    }
    set x(value: number) {
        this._x = value;
    }
}

const point3 = new Point3();
console.log(point3._x); //? Didn't using getter, value is default 0
console.log(point3.x);//? Using getter, value is default + 1
point3.x = 10;//? Using setter set value to 10
console.log(point3._x); //? Value is changed to 10

/*---------------------------------------------------------------------*/

class Person {
    name: string = "";
    constructor(name: string) {
        this.name = name;
    }
    sayHello(): void {
        console.log(`Hello, ${this.name}`);
    }
}

const person = new Person("John");
person.sayHello();

/*---------------------------------------------------------------------*/

//? Inheritance, Person is superclass, Employee is subclass.
class Employee extends Person {
    salary: number = 0;
    constructor(name: string, salary: number) {
        super(name);
        this.salary = salary;
    }
    sayHello(): void {
        console.log(`Hello, ${this.name}, your salary is ${this.salary}`);
    }
}

const employee = new Employee("John", 1000);
employee.sayHello();

/*---------------------------------------------------------------------*/

//? Example OOP

abstract class Character {
    public name: string = "";
    public damage: number = 0;
    public attackSpeed: number = 0;

    constructor(name: string, damage: number, attackSpeed: number) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = attackSpeed;
    }

    public abstract damagePerSecond(): number;
}

class Goblin extends Character {
    constructor (name: string, damage: number, speed: number) {
        super(name, damage, speed);
    }

    public damagePerSecond(): number {
        return this.damage * this.attackSpeed;
    }
}