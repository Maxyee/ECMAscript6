// arrow function code start
const a = 10;
const b = 20;

const sum = (a,b) => a+b;
console.log(sum(a,b));
//arrow function code end


//constant variable code start
const x = 10;

//x = 25; // this line will not execute cuz x is a Constant variable

console.log(x);
//constant variable code end


//constant array code start
const arr = [];
arr.push(10);
arr.push(14);
console.log(arr);
//constant array code end



// problem with var variable declartaion
var ab = 10;

if(true)
{
    var ab = 20;
    console.log(ab);
}
console.log(ab); // it prints the value a = 20;
// problem with var variable declartion 

// let variable declaration code start
let z = 10;

if(true)
{
    let z = 20;
    console.log(z);
}
console.log(z); // it prints the value of z = 10;
// let variable declaration code end


//let variable is so much useful for block code
function demo()
{
    {
        let x = 10;
        {
            const x = 15;
            console.log(x);
        }

        x = 20;
        console.log(x);
    }
}
demo();
// code ends here

//template string code starts here ---->
const name = 'Julhas Hossain'
const age = 25
const email = 'eyaminkhan00@gmail.com'

const details = 'Name: ' + name + 'Age: '+ age + 'Email: ' + email

console.log(details)
//template string code ends here ----->


//template string multiline code starts here ------->
const name2 = 'Eyamin Khan'
const age2 = 23
const email2 = 'eyamin@gmail.com'

const details2 = `Name : ${name2} Age: ${age2} Email: ${email2} `
console.log(details2)
//template string multiline code ends here ---------->


//arrow function code start------->
const print = (name) => {
    console.log('Hello Arrow Function' + name)
}

print('julhas hossain')

const addMe = (a,b) => {
    return a+b;
}
console.log(addMe(10,20))

const subMe = (a,b) => a-b;

console.log(subMe(20,10))


const sqe = x => x*x 

console.log(sqe(10))
//arrow function code end -------->



//arrow fuction with lexical this ------>

// const obj = {
//     name: 'Julhas hOssain',
//     print : function() {
//         console.log(this)
//     }
// }

//normal way of using this,...
const obj = {
    name: 'Julhas hOssain',
    print : function() {
        setTimeout(function() {
            console.log(this)
        }.bind(this), 1000)
    }
}

obj.print()

//using arrow function into this obj ......

const obj2 = {
    name: 'Julhas hOssain Khan',
    print : function() {
        setTimeout(() => {
            console.log(this.name)
        }, 1000)
    }
}

obj2.print()

//arrow functiom with lexical this ends ---->


//enhance object code starts here ------>
let name23 = 'Mohon Khan';
let email23 = 'mohon@gmail.com';

const Cat = {
    name: name,
    email: email
}

const Dog = {
    name23,
    email23,

    print() {
        console.log(this.name23, this.email23)
    }
}

Dog.print()
console.dir(Dog)
//enhance object code ends here -------->

//destructing Array and Object Code Stars ------->
const arraay = [1,2,3];

let [a, ,c] = arraay;

console.log(a);
console.log(c);

const obj55 = {
    name: 'Julhas hossain',
    email: 'julhas@gmail.com'
}

let { name, email } = obj55;
console.log(name, email);

function print({name, email}){
    console.log(`Hello ${name}; Email ${email}`);
}

print({name, email})


//let name = obj55.name;
//let email = obj55.email;

//var a = arr[0];
//var b = arr[2];

//destructing Array and Object Code Ends ------->


//Default Parameter, Rest, And Spred Operator ------>

//Default Parameter
let adding = (a, b) => a+b;

console.lag(adding(10,20));

let squre = (a=1,b=a) => a*b;  // if we can not pass any value for that function then the default value for a =1 and b = a

console.log(squre(10));
console.log(squre(10, 5))

//Rest Operator
function sumesion(...num)
{
    //console.log(num);
    return num.reduce((a,b) => a+b );
}
let xam = sumesion(10,20,30,40);
console.log(xam);

//Spred Oparator
var arrayvalue = [1,2,3,4];
console.log(arrayvalue);
console.log(...arrayvalue);

arrayvalue = [...arrayvalue , 12, 223, 10]
console.log(arrayvalue);

//for object value
var obj66 = {
    name: 'julhas hossain',
    email: 'hossain@gmail.com'
}

var obj77 = {
    ...obj66,
    name: 'eyamin',
    age: 22
}
console.log(obj77);

//Default Parameter, Rest And Spred Operator ------->


//Module System Code starts ------>

import * as math from './math'; //calling all the function from math js file
console.log(math.add(10,12));

import { add,mod } from './math';  // if we need specific method form another file we can call in destructuring way
console.log(mod(10,3));

//Module System Code Ends ------->



//Classes in Es6 code starts ------>
import Person from './person'

let p1 = new Person('julhas', 'julhas@gmail.com');
console.log(p1.name);
p1.print();

//Classes in Es6 code ends -------->

//inheritance in Es6 code start  ------>
import Student from './student.js'

let st1 = new Student('Eyamin', 'eyamin@gmail.com', 1551)
st1.print();
//inheritance in Es6 code ends  ------>