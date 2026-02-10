const api_key = "b92e57938eaebc6ded1fcf3a2f5b4bc3"

async function getWeather(city){
    
    try{
       let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
       let data = await raw.json()
    //    console.log(raw)
       if(!raw.ok){
           throw new Error("Incorrect City Name")
       }
       console.log(`Current Temperature in ${city} : ${data.main.temp}°C`)

   }catch(err){
    console.log(err.message);
    
   }
    
}

// getWeather("hyderabad")

let users = ["saleem@gmail.com",
             "abdulsoda@gmail.com",
             "Bide@gmail.com"
            ]

function sendEmail(email){
    return new Promise ((resolve , reject )=>{
        let time = Math.floor(Math.random()*5)

        setTimeout(() => {
            let probability = Math.floor(Math.random()* 10);
            if(probability <= 5) resolve(`Email Send to ${email} Successfully...`)
            else reject(`Email cant be send to ${email}`) 
        }, time*1000);
    })
}

async function sendEmails(userEmails){
    let allresponses = userEmails.map((email)=>{
        return sendEmail(email)
        .then((data)=>{
            return data
        })
        .catch((err)=>{
            return err
        })
    })

    let allpromises = await Promise.all(allresponses);

    allpromises.forEach((data) => {
        console.log(data);
    });
}

sendEmails(users)