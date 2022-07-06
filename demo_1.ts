//From Google style guide:
//todo UpperCamelCase for class, interface, type, enum, decorator, type parameters
//todo LowerCamelCase for variable, function, parameter, property, method alias
//todo CONSTANT_CASE for goble constant value, including enum value
//todo #ident for private identifier are never used.

//?Basic Types
var myName:string = "king";
var myAge:number = 23;
var myWeight:number = 74.5;
var mySkill:Array<string> = ["typeScript", "JavaScript", "Python", "Golang", "HTML", "CSS"];
var myArray:number[] = [1,2,3,4,5];
var myTuple:[string, number] = ["hello", 23];//?We can fix the type and the number of elements in the tuple.
enum WorkStatus {
    Task = 1,
    Working,
    Done
}

console.log(myName,"type = ", typeof(myName));
console.log(myAge,"type = ", typeof(myAge));

console.log(myWeight,"type = ", typeof(myWeight));//? Integer and Float are same type.

console.log(mySkill,"type = ", typeof(mySkill));
console.log(myArray,"type = ", typeof(myArray));//? Array is not a type.

console.log(myArray[0],"type = ", typeof(myArray[0]));
console.log(mySkill[0],"type = ", typeof(mySkill[0]));

console.log(WorkStatus.Task, "type = ", typeof(WorkStatus.Task));
console.log(WorkStatus.Working, "type = ", typeof(WorkStatus.Working));
console.log(WorkStatus.Done, "type = ", typeof(WorkStatus.Done));

console.log(null === undefined); //false
console.log(null == undefined); //true
console.log(null === null); //true