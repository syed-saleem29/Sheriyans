// function khao(){
//     console.log("Khanakhao")
    
// }
// khao()


function doSomething(name, age, email){
    console.log(`Name : ${name}`)
    console.log(`Age : ${age}`)
    console.log(`Email : ${email}`)
}
doSomething("syed", 52, "syedsaleem.2993@gmail.com")

function doSomething(name, age, email){
    console.log(arguments)
}
function doSomething(){
    console.log(arguments[0])
}

// functions created with keyword "function" can be used before the declaration of the function (hoisting)

var a = function doSomething(){
    console.log(arguments[0])
}

// functions created with var cannot be used before the declaration of the function must be used after the function is made/declared

//   Rest Parameter
function nums(a,b,...c){
    console.log(a,b,c)
}
nums(1,2,2,2,6,4,5,9,4,1,55)


// abb();
var abb = function(){
    console.log("Hey")
}

// Parameters in javascript - ['required', 'destructured', 'rest', 'default']

// Destructured
function destructured({name, age}){
    console.log(name,age)
}
// destructured({name: "saleem", age: 50})

// Default parameters in js - if arguments are less than the parameters
function defaultpara(a = 0, b = 0, c = 0){
    console.log(a, b, c)
}
defaultpara(1,2)


// arguments in js - ['positional' , 'default' , 'spread']
// positional arguments means arguments are given in arguments like functioon __ (a, b, c) -- for positional arguments all parameters are mandatory if not going to give give null.


// for spread arguments 
function spreadarg(a,b,c,d){
    console.log(a,b,c,d)
}

let arr = [1,2,3,4,5]
// way-1 :
spreadarg(arr[0], arr[1],arr[2])

// way-2 :
spreadarg(...arr)



// Immediately Invoked Function Expression (IIFE)
// (function(){

// })();


// Fat Arrow Function

let func = ()=> {
    console.log("Heyheyeheyeheyehy")
}

// Anonymous Function - Function who Doesnt Have name
// function(){

// }

// Higher Order Function

function abcd(){
    return function(){
        
    }
}

function abcd(){

}
abcd(function(){
     
})
// here abcd is the higher order function and anonymous function is the callback


// firstclass function -fcf it is a concept in programming :::: functions can be used as variables
function abcd(a,b){

}
abcd(function(){},2)

// Closure : - ek fuction hai return karta hai function , but it also uses the variable of the parent function/ higher order function

function apple(){
    let a = 12
    return function(){
        console.log(a)
    }
}


// Arrays
let aarr = [5,2,5,2,6,1]
let aar2 = new Array()

// Functions on Arrays - [Push, pop, shift, unshift, indedOf, array destructuring, filter, some, map, reduce, spread operator, slice, reverse, sort, join, toString]


// forEach Loop
let are = [13,6,55,5,2,2,2,55,161,66,6,6,16,616]
arr.forEach(function(val){
    console.log(val)
})


// Objects 
let obj2 = new Object()
let obj = {
    names : "saleem",
    age : 28,
    email : "syedsaleem.2993@gmail.com"
}

console.log(obj.names);
console.log(obj['names', 'age'])
delete obj.names;