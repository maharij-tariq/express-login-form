import express from 'express'
const app = express()
import {home} from './home.js'
import login from './login.js'
import submit from './submit.js'
const PORT = 3002;
app.use(express.json())
app.get('/',(req,res)=>{
 res.send(home())
})
app.get('/login',(req,res)=>{
res.send(login())
})
app.post('/submit',(req,res)=>{
    res.send(submit())
})
app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})