const express=require('express')
const app=express()
const cors=require('cors')
app.get('/',(req,res) =>{
    res.send('<h1>Bonjour Rachad</h1>')
})
app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE,OPTIONS"
}))
app.use(express.json())
const routesprod= require('./routes/ProductRoutes')
app.use('/api/rachad',routesprod)

module.exports=app