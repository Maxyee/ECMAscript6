
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
var a = 10;

if(true)
{
    var a = 20;
    console.log(a);
}
console.log(a); // it prints the value a = 20;
// problem with var variable declartion 

// let variable declaration code start
let z = 10;

if(true)
{
    let z = 20;
    console.log(a);
}
console.log(a); // it prints the value of z = 10;
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
