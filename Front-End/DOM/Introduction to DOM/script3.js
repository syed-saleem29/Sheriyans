let button = document.querySelector('button')
let main = document.querySelector('main')
// console.log(element);

button.addEventListener('click',function(){
    let element = document.createElement('div')
    
    let x = Math.floor(Math.random()*100)
    let y = Math.floor(Math.random()*100)
    
    let c1 = Math.floor(Math.random()*255)
    let c2 = Math.floor(Math.random()*255)
    let c3 = Math.floor(Math.random()*255)
    let r = Math.floor(Math.random()*360)
    
    element.style.height = '70px';
    element.style.width = '70px';
    element.style.position = 'absolute';
    element.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`

    element.style.left = x +'%'
    element.style.top = y +'%'
    element.style.rotate = r +'deg'

    main.appendChild(element)
})




