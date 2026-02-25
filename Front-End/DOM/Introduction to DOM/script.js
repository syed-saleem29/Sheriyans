// 4 pillars of DOM 
// - Selectors
        // - querySelector
        // - getElementById
        // - querySelectorAll
// - changing HTML
        // - textContent
        // - innerHTML
// - changing CSS
// - Event Listeners

// innerHTML changes the code and implements the tags in it 
// while textContent shows the code same as imput it also displays the tags








// selecting the tags
var h1 = document.querySelector('h1')

// To use in Css file use .style after the tag ex: h1.style
// like background-color we use backgroundColor, replace "-" with camelcase
h1.style.color = 'gold'
// h1.style.backgroundColor = 'orange'

// var box = document.querySelector('#box')
// console.log(box)
// box.style.backgroundColor = "blue"  
h1.addEventListener('click',function(){
    h1.style.color = "red"
})

var h1 = document.getElementById('#hero') //selecting the ID
