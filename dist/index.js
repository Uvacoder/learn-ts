"use strict";
/**
 * @desc Basic types
 */
let id = 5;
let company = 'Atomus';
let isPublished = true;
let x = 'Hello';
// Arrays 
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'samuel'];
// Tuple - length and type specified array
let person = [1, 'samuel', true];
// Tuple Array 
let employee = [[1, 'leonardo'], [1, 'jill']];
// Unions - can be string or number or boolean
let pid = 22;
/**
 * @desc Enum - define a set of defined constants
 */
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
;
console.log(Direction1.Up); // 0
// start index is now 0
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
;
console.log(Direction2.Down); // 2
// set enums to a specific value 
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
;
console.log(Direction3.Down); //  Down 
const user = {
    id: 1,
    name: 'John'
};
/**
 * @desc Type assertion - explictly tell compiler that you wanna treat an entity as another type:
 */
let cid = 1;
let cusomterId = cid;
// also works: let customerId = <number>cid; 
// customerId = true -> error, since customerid must be a number
/**
 * @desc Functions
 */
function addNum(x, y) {
    return x + y;
}
;
console.log(addNum(1, 2));
// Function with no return value
function log(message) {
    console.log(message);
}
log(1); // 1
;
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
/**
 * @desc: Classes (introduced in js after es6)
 */
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
;
const sam = new Person(0, 'sam', 32);
const jam = new Person(1, 'jam', 45);
console.log(sam, jam); //Person { id: 0, name: 'sam' } Person { id: 1, name: 'jam' }
console.log(sam.name); // sam
// console.log(sam.id) -> error since id is private - can only access from within the class
// console.log(sam.age) -> error since its protected - can only access within the class or extended from this class
console.log(sam.register()); // sam is now registered
;
class Person1 {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.somePrivateThing = 111;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
;
// Pro tip: Interfaces define public contracts, so it shouldn't include any private properties or else it errors out
/**
 * @desc: Sub classes (extend a class)
 */
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age); // construct with the parent class constructor 
        this.position = position;
    }
}
const emp = new Employee(3, 'jamal', 25, 'developer');
console.log(emp.register()); // jamal is now registered
/**
 * @desc: Generics - used to build reusable components
 */
// without generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brand', 'john', 'jill']);
numArray.push('Some str'); // this compile - no bueno we wanna have a num typed array!
// with generics
function getArray1(items) {
    return new Array().concat(items);
}
let numArray1 = getArray1([1, 2, 3, 4]);
let strArray1 = getArray1(['brand', 'john', 'jill']);
// numArray1.push('Some str'); // this does not compile 
