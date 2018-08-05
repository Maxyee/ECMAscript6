
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