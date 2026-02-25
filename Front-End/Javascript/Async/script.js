// Callback

// function getInstaData(userId, cb){
//     console.log("Fetching Details...");
    
//     setTimeout(() => {
//         cb({username : "Syed", age : 52 })
//     }, 3000);
// }

// function getInstaPosts(usename,cb){
//     console.log("fetching Images");
    
//     setTimeout(() => {
//         cb(["img1", "img2"]);
//     }, 4000);
// }

// getInstaData("syed5235",function(obj){
//     console.log(obj)
//     getInstaPosts(obj.usename, function(posts){
//         console.log(posts)
//     })

// })

// PROMISE

// let prm = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve();
//     }, 3000);
// })


// Fetch

// fetch(`https://randomuser.me/api`)
// .then((raw) => raw.json())
// .then((data)=>{
//     console.log(data.results[0].name.first)
// })
// .catch((err)=>{
//     console.log(err)
// })


// Async Await

async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`)
    let data = await raw.json()
    console.log(data.results[0].name.first)
}

abcd();