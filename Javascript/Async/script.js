// Callback

function getInstaData(userId, cb){
    console.log("Fetching Details...");
    
    setTimeout(() => {
        cb({username : "Syed", age : 52 })
    }, 3000);
}

function getInstaPosts(usename,cb){
    console.log("fetching Images");
    
    setTimeout(() => {
        cb(["img1", "img2"]);
    }, 4000);
}

getInstaData("syed5235",function(obj){
    console.log(obj)
    getInstaPosts(obj.usename, function(posts){
        console.log(posts)
    })

})