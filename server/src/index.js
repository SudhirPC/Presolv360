const express=require('express');
const connect=require("./configs/db.js")
const Port = process.env.PORT || 3755
var cors = require('cors')
const app=express();
app.use(express.json());


const loginAuth=require("./controller/auth.controller.js")
app.use("/",loginAuth)
const RegisterAuth=require("./controller/auth.controller.js")
app.use("/",RegisterAuth)

const Taskadd=require("./controller/task.controller.js")
app.use("/taskadd",Taskadd)

app.use(cors())
app.listen(Port,async function(){
    try {
        await connect();
           console.log(`Listening on ${Port}` )
    } catch (error) {
         console.log(err)
    }
})