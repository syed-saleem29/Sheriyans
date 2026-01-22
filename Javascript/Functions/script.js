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