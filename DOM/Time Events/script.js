// console.log("hello1");
// setTimeout(() => {
//     console.log("hello 2");
    
// }, 3000);
// console.log("hello3");

let namee = document.querySelector('h1');

let btn = document.querySelector('button')

btn.addEventListener('click' ,function(){
    namee.innerHTML = 'Decrypting...'
    
    setTimeout(() => {
        namee.innerHTML = 'Code Red'
        namee.style.color = 'red'
        namee.style.fontWeight = 'bold'
    }, 3000);
})
// var a = 0
// var int = setInterval(() => { // it is a controlled loop  || It is paired with clear interval
//     a++
//    console.log(a)
// }, 100);

// setTimeout(() => {
//     clearInterval(int)
//     console.log("Stopped")
// }, 5000);