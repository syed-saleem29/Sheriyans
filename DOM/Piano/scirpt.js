keyrole = {
    a : {
        keyval :"key1",
        color : "rgb(200, 200, 200)",
        keytone : new Audio('./Keys/28.mp3')
    },  
    s : {
        keyval :"key2",
        color : "rgb(200, 200, 200)",
        keytone : new Audio('./Keys/29.mp3')
    },  
    d : {
        keyval :"key3",
        color : "rgb(200, 200, 200)",
        keytone : new Audio('./Keys/30.mp3')
    },  
    f : {
        keyval :"key4",
        color : "rgb(200, 200, 200)",
        keytone : new Audio('./Keys/31.mp3')
    },  
    g : {
        keyval :"key5",
        color : "rgb(200, 200, 200)",
        keytone : new Audio('./Keys/32.mp3')
    },  
    h : {
        keyval :"key6",
        color : "rgb(200, 200, 200)",
        keytone : new Audio('./Keys/33.mp3')
    },  
    j : {
        keyval :"key7",
        color : "rgb(200, 200, 200)",
        keytone : new Audio('./Keys/34.mp3')
    },  
    k : {
        keyval :"key8",
        color : "rgb(200, 200, 200)",
        keytone : new Audio('./Keys/35.mp3')
    },  
    l : {
        keyval :"key9",
        color : "rgb(200, 200, 200)",
        keytone : new Audio('./Keys/36.mp3')
    },  
    ';' : {
        keyval :"key10",
        color : "rgb(200, 200, 200)",
        keytone : new Audio('./Keys/37.mp3')
    },  
    w : {
        keyval :"key11",
        color : "rgb(25, 25, 25)",
        keytone : new Audio('./Keys/38.mp3')
    },  
    e : {
        keyval :"key12",
        color : "rgb(25, 25, 25)",
        keytone : new Audio('./Keys/39.mp3')
    },  
    t : {
        keyval :"key13",
        color : "rgb(25, 25, 25)",
        keytone : new Audio('./Keys/40.mp3')
    },  
    y : {
        keyval :"key14",
        color : "rgb(25, 25, 25)",
        keytone : new Audio('./Keys/41.mp3')
    },  
    u : {
        keyval :"key15",
        color : "rgb(25, 25, 25)",
        keytone : new Audio('./Keys/42.mp3')
    },      
    o : {
        keyval :"key16",
        color : "rgb(25, 25, 25)",
        keytone : new Audio('./Keys/43.mp3')
    },  
    p : {
        keyval :"key17",
        color : "rgb(25, 25, 25)",
        keytone : new Audio('./Keys/44.mp3')
    }
}

// Object to track active key timeouts
const activeKeyTimeouts = {};

document.addEventListener('keydown', function(event){
    let keyentered = event.key;
    let keyfunction = keyrole[keyentered];
    
    if (!keyfunction) return; // Skip if key not mapped
    
    // Clear any existing timeout for this key
    if (activeKeyTimeouts[keyentered]) {
        clearTimeout(activeKeyTimeouts[keyentered]);
        delete activeKeyTimeouts[keyentered];
    }
    
    let keyelement = document.querySelector("#"+keyfunction.keyval);
    
    if (keyelement) {
        // Stop and reset the audio if it's playing
        if (keyfunction.keytone) {
            keyfunction.keytone.pause();
            keyfunction.keytone.currentTime = 0;
        }
        
        // Play the audio
        keyfunction.keytone.play().catch(e => {
            console.log("Audio play failed:", e);
        });
        
        // Apply visual effect
        keyelement.style.backgroundColor = keyfunction.color;
        keyelement.style.marginTop = "10px";
        keyelement.style.marginBottom = "-10px"; // Add this to prevent layout shift
        
        // Set timeout to reset the key
        activeKeyTimeouts[keyentered] = setTimeout(function(){
            keyelement.style.marginTop = "";
            keyelement.style.marginBottom = "";
            keyelement.style.backgroundColor = "";
            console.log(activeKeyTimeouts);
            delete activeKeyTimeouts[keyentered];
        }, 100);
    }
});







// Saleem Function
// document.addEventListener('keydown', function(event){
//     let keyentered = event.key
//     let keyfunction = keyrole[keyentered]
//     // console.log(keyfunction.keyval);
//     let keyelement = document.querySelector("#"+keyfunction.keyval)
//     // console.log(keyelement);
    
//     keyfunction.keytone.play()
//     keyelement.style.backgroundColor = keyfunction.color
//     keyelement.style.marginTop = "10px"
    
//     setTimeout(function(){
//         keyelement.style.marginTop = ""
//         keyelement.style.backgroundColor = ""
//     }, 100);
    
    
// })