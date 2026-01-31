let allBtn = document.querySelectorAll('button')

// console.log(outer.childNodes);
allBtn.forEach(function(elem){
    elem.addEventListener('click',function(){
        // console.log('hello') 
        if (elem.innerHTML === 'Add Friend') elem.innerHTML = "Remove Friend"
        else elem.innerHTML = "Add Friend"
    })
})
