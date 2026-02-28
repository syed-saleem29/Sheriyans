const app = require('./src/app')
const mongoose = require('mongoose')



function connectToDB(){
    mongoose.connect('mongodb+srv://syedsaleem2993_db_user:azjtNZMc4SKhL53M@cluster0.jqzwdkk.mongodb.net/sheryians')
    .then(()=>{
        console.log("Connected to DataBase")
    })
}


connectToDB()

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})