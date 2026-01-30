let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let startbtn = document.querySelector('.start')
let resetbtn = document.querySelector('.reset')
let pausebtn = document.querySelector('.pause')

const ticksound = new Audio('tick.mp3')
const beepsound = new Audio('beep.mp3')

ticksound.volume = 0.9
beepsound.volume = 0.6

let totalseconds = 0
let timer = null

function updateUI(){
    let h = Math.floor(totalseconds / 3600)
    let m = Math.floor((totalseconds % 3600) / 60)
    let s = Math.floor(totalseconds % 60)

    hour.textContent = String(h).padStart(2,"0");
    minute.textContent = String(m).padStart(2,"0");

    if (timer) {
    // 🔊 tick sound synced with flip
    ticksound.currentTime = 0;
    ticksound.play();
  }

    second.textContent = String(s).padStart(2,"0");
    
}

function addScroll(el,step){
    
    el.addEventListener('wheel',(e)=>{
        e.preventDefault();
        if (timer)  return;
        if(e.deltaY > 0) totalseconds += step;
        else totalseconds -= step;
        
        totalseconds = Math.max(0,totalseconds)
        updateUI()
    })
}


addScroll(hour,3600)
addScroll(minute,60)
addScroll(second,1)

startbtn.addEventListener('click',()=>{
    if (timer || totalseconds === 0 ) return
    timer = setInterval(() => {
        totalseconds--
        ticksound.currentTime = 0
        ticksound.play()

        updateUI()
        
        if (totalseconds === 0){
            clearInterval(timer);
            timer = null
            ticksound.pause()

            beepsound.playbackRate = 1.5
            beepsound.loop = true
            beepsound.play();

            setTimeout(() => {
                beepsound.pause()
                beepsound.currentTime = 0
                beepsound.loop = false
            }, 5000);
        // alert("Time's Up")
    }
    }, 1000);
})


resetbtn.addEventListener('click',()=>{
    clearInterval(timer)
    totalseconds = 0
    timer = null
    updateUI()
})
pausebtn.addEventListener('click',()=>{
    clearInterval(timer)
    ticksound.pause()
    timer = null
    updateUI()
})
updateUI()