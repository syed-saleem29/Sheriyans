let box1 = document.querySelector('.box')
// box1.addEventListener('mouseenter',function(){
//     console.log('Mouse Entered the area')
// })
// box1.addEventListener('mouseleave',function(){
//     console.log('Mouse Left the area')
// })
// box1.addEventListener('click',function(){
//     console.log('click performed')
// })
// box1.addEventListener('dblclick',function(){
//     console.log('Double Click')
// })
// box1.addEventListener('mousemove',function(){
//     console.log('Mouse has moved')
// })
// document.body.addEventListener('Keypress',function(){
//     console.log('key has pressed')
// })
document.body.addEventListener('keydown',function(dets){
    // console.log(dets.key);
    box1.textContent = dets.key
    
})
