const express = require("express")

const app = express()

app.use(express.json())

const notes=[]

app.get("/",(req,res)=>{
    res.send("this is server")
})


app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.send("note created")
    console.log(notes)
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/:index",(req,res)=>{
    
    delete notes[req.params.index]
    res.send(notes)
    console.log("note deleted")
})

app.patch("/notes/:index",(req,res)=>{
    // console.log(notes[req.params.index])
    notes[req.params.index].description = req.body.description
    res.send("description updated")
})


module.exports = app