/**
 * @desc Basic types
 */
let id: number = 5; 
let company = 'Atomus'; 
let isPublished: boolean = true;
let x: any = 'Hello'

// Arrays 
let ids: number[] = [1,2,3,4,5];
let arr: any = [1, true, 'samuel']

// Tuple - length and type specified array
let person: [number, string, boolean] = [1, 'samuel', true];

// Tuple Array 
let employee: [number, string][] = [[1, 'leonardo'], [1,'jill']];

// Unions - can be string or number or boolean
let pid: string | number | boolean = 22; 

/**
 * @desc Enum - define a set of defined constants 
 */
enum Direction1 {
    Up, 
    Down, 
    Left, 
    Right 
};

console.log(Direction1.Up); // 0

// start index is now 0
enum Direction2 {
    Up = 1, 
    Down, 
    Left, 
    Right 
};

console.log(Direction2.Down); // 2

// set enums to a specific value 
enum Direction3 {
    Up = 'Up', 
    Down = 'Down', 
    Left = 'Left', 
    Right = 'Right' 
};

console.log(Direction3.Down); //  Down 

/**
 * @desc Objects
 */
type User = {
    id: number, 
    name: string
};

const user: User = {
    id: 1,
    name: 'John'
};

/**
 * @desc Type assertion - explictly tell compiler that you wanna treat an entity as another type: 
 */
let cid: any = 1;
let cusomterId = cid as number;
// also works: let customerId = <number>cid; 
// customerId = true -> error, since customerid must be a number

/**
 * @desc Functions
 */
function addNum(x: number, y: number): number {
    return x+y; 
};

console.log(addNum(1,2));

// Function with no return value
function log(message: string | number): void {
    console.log(message);
}
log(1); // 1

/**
 * @desc: Interfaces - custom type, specific types for objects and functions
 */
interface IUser {
    readonly id: number, // read only properties 
    name: string,
    age?: number // optional properties
};

const user1: IUser = {
    id: 1,
    name: 'John'
};

// type vs. interfaces: ONLY types can be used with primitives and unions
type Point = number | string; 
const p1: Point = 1;

/**
 * @desc: Function interfaces
 */
interface MathFunc {
    (x:number, y: number): number;
}

const add: MathFunc = (x: number, y:number): number => x+y;
const sub: MathFunc = (x: number, y:number): number => x-y;

/**
 * @desc: Classes (introduced in js after es6)
 */
class Person {
    // public, private, protected
    public name: string
    private id: number
    protected age: number

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name; 
        this.age = age;
    }

    register() {
        return `${this.name} is now registered`;
    }
};
const sam = new Person(0, 'sam', 32);
const jam = new Person(1, 'jam', 45);

console.log(sam, jam) //Person { id: 0, name: 'sam' } Person { id: 1, name: 'jam' }
console.log(sam.name); // sam
// console.log(sam.id) -> error since id is private - can only access from within the class
// console.log(sam.age) -> error since its protected - can only access within the class or extended from this class

console.log(sam.register()); // sam is now registered


/**
 * @desc: Implement an interface in a class 
 */
interface PersonInteface {
    id: number, 
    name: string,
    age: number
    
    register(): string
};

class Person1 implements PersonInteface {
    // public, private, protected
    name: string
    id: number
    age: number
    private somePrivateThing: number

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name; 
        this.age = age;
        this.somePrivateThing = 111
    }

    register() {
        return `${this.name} is now registered`;
    }
};
// Pro tip: Interfaces define public contracts, so it shouldn't include any private properties or else it errors out
 

/**
 * @desc: Sub classes (extend a class) 
 */ 
class Employee extends Person {
    position: string
    
    constructor(id: number, name: string, age: number, position: string) {
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
function getArray(items: any[]): any[] {
    return new Array().concat(items);
}

let numArray = getArray([1,2,3,4]);
let strArray = getArray(['brand', 'john', 'jill']);

numArray.push('Some str'); // this compile - no bueno we wanna have a num typed array!

// with generics
function getArray1<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray1 = getArray1<number>([1,2,3,4]);
let strArray1 = getArray1<string>(['brand', 'john', 'jill']);

// numArray1.push('Some str'); // this does not compile 