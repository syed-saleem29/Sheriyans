// Error Handling

// Syntax Error 
// rumtime Error
// Logical Error

try {
console.log(a)
} catch (error) {
    // console.log(error.name)
    // console.log(error.message)
    // console.log(error.stack)

    throw new Error ("Something Went Wrong")
}finally{
    console.log("works everytime ");
    
}