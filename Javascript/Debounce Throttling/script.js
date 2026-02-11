// Debouncing 
function debounce(fn, delay) {
  let timer;
  return function(){
    clearTimeout(timer)
    timer = setTimeout(fn, delay);
  }
}



document.querySelector("#search").addEventListener(
  "input",
  debounce(() => {
    console.log("debouced");
  }, 500)
);

// Throttling

function throttle(fn,delay){
    let last = 0;
    return function(){
        const now = Date.now()
        if (now -  last >= delay){
            last = now;
            fn()
        }
    }
}

window.addEventListener('mousemove',throttle(function(e){
    console.log("Mouse Moveed")
},2000))



// json parse -> json format to normal data
// json stringify -> convert normal to json format