// Math Random
// let a = Math.random()*100
// let b = Math.floor(a)
// console.log(a)
// console.log(b)

let box = document.querySelector('#box')
let btn = document.querySelector('button')
// console.log(box)

btn.addEventListener('click',function(){
    let c1 = Math.floor(Math.random()*255)
    let c2 = Math.floor(Math.random()*255)
    let c3 = Math.floor(Math.random()*255)

    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
    console.log(c1,c2,c3)
})