// 1.
function runTwice(fn){
    fn();
    fn();
}

runTwice(function (){
    console.log("Hello")
});

// 2.
let global = 0

function pure(a,b){
    console.log(a+b)
}

function impure(a){
    console.log(global+a)
}
pure(1,2)
impure(5)

// 3.
function destruct({name, age}  ){
    console.log(name, age)
}

destruct({name:"saleem" ,age : 15})

// 4.
// This Keyword
let obj = {
    name : "anarkali",
    func: function(){
        console.log(this)
    },
    func2 : ()=> {
        console.log(this)
    }
}
obj.func()
obj.func2()

// 5.
let arr = [1,2,3,4,5]

let newarr = arr.map(function(val){
    return val *val;
})
console.log(newarr)

// 6.
let salary = [1000,2000,3000,5000];
let ans = salary.reduce(function(acc, val){
   return acc + val
},0)
console.log(ans)

// 7.
let names = ["salee","anarkali","suleman", "thor"]

let ans2 =names.every(function(val){  //atlest one
    return val.length > 3;
})
let ans3 =names.some(function(val){   //all true
    return val.length > 9;
})

// 8.
let user = {
    name : "saleem",
    age: 22,
    email: "syedsaleem.2993@gmail.com"
}

Object.freeze(user); // fixed the values of object and cannot add new pairs  
Object.seal(user); // fixed the values of object, can change the value but cannot add new pairs

// 9.

let userdata = {
    user: {
        name: "saleem",
        address: {
            city : "Hyderabad",
            state : "Telangana",
            country : "India"
        }
    }
};

console.log(userdata.user.address.state)
let {state} = userdata.user.address
console.log(state)