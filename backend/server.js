import express from "express";
import mongoose from "mongoose";
import Cors from 'cors'
import Videos from './dbModel.js'

const app= express()
const port= process.env.PORT || 9000
const connection_url="mongodb+srv://mahesh:mahesh@cluster0.thvfopp.mongodb.net/tiktok-mern-clone?retryWrites=true&w=majority"

app.use(express.json())
app.use(Cors())

 mongoose.connect(connection_url,{})

app.get("/", (req,res)=> res.status(200).send("tiktok mern clone-mahesh"))


app.post('/v2/posts',(req,res)=>{
    const dbVideos=req.body
    Videos.create(dbVideos,(err, data)=>{
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)    
    })
})

app.get('/v2/posts',(req,res)=>{
    
    Videos.find((err, data)=>{
        if(err)
            res.status(500).send(err)
        else
            res.status(200).send(data)    
    })
})


app.listen(port ,()=>console.log(`listening on localhost: ${port}`))