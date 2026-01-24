// 1.
function summ(a, b){
    return a+b
}
console.log(summ(2,3))

// 2.
function hiname(name = "guest"){
    console.log(`Hi ${name}`)
}
// hiname("saleem");
hiname()

// 3.
function unlimited(...nums){
    // console.log(nums)
    let sums = 0
    // for loop can also be used
    nums.forEach(function(val){
        // console.log(val)
        sums += val

    })
    return sums
}
function unlimited2(...nums){
    let ans = nums.reduce(function(acc, val){   // reduce the array into single value
        return acc + val;
    }, 0);            // acc ki first value 0
    console.log(ans);
}
// console.log(unlimited(1,2,3,4,5,6))
console.log(unlimited2(1,2,3,4,5,6));

//  4. IIFE
(function(){
    console.log("I run Instantly")
})();

// 5.
function parent(){
    let a = 3
    function child(){
        console.log(a);
    }
    child();
}
parent();

// 6.
let arr = ["apple","mango", "pineapple"]
arr.push("orange")
arr.shift()
console.log(arr)

// 7.
for (let j = 0; j<arr.length;j++){
    console.log(arr[j])
}

// 8.
let obj = {
    name: "Saleem",
    age : 22,
    city : "hyd"
};
for (let key in obj){     // for in loop
    console.log(key)
    console.log(obj[key])
}

// 9.
setTimeout(() => {
    console.log("Timeout")
}, 9000);