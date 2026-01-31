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

document.addEventListener('keydown', function(event){
    let keyentered = event.key;
    let keyfunction = keyrole[keyentered];
    
    if (!keyfunction) return; 
    
    let keyelement = document.querySelector("#"+keyfunction.keyval);
    
    if (keyelement) {
        // Stop and reset the audio if it's playing
        if (keyfunction.keytone) {
            keyfunction.keytone.pause();
            keyfunction.keytone.currentTime = 0;
        }
        
        keyfunction.keytone.play()
        
        keyelement.style.backgroundColor = keyfunction.color;
        keyelement.style.marginTop = "10px";
        keyelement.style.marginBottom = "-10px"; 
        
        setTimeout(function(){
            keyelement.style.marginTop = "";
            keyelement.style.marginBottom = "";
            keyelement.style.backgroundColor = "";
        }, 100);
    }
});