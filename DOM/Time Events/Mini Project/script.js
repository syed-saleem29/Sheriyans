let btn = document.querySelector('button')
let inner = document.querySelector('.inner')
let downloadNotify = document.querySelector('.downloaded')
let grow = 0

let h2 = document.querySelector('h2')

btn.addEventListener('click',() =>{
    btn.style.pointerEvents = 'none'

    var int = setInterval(()=>{
        grow += 0.1
        inner.style.width = grow+'%'
        h2.innerHTML = Math.round(grow)+"%"
    },10)

    setTimeout(() => {
        clearInterval(int)
        downloadNotify.style.visibility = 'visible'
        btn.style.opacity = 0.5
    }, 10000);
})
