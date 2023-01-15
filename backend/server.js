const app=require('./app')
const mongosse=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:'./backend/config/config.env'})
const PORT=process.env.PORT
const DB=process.env.db
mongosse.connect(DB,()=>console.log(`database connected ${DB}`))

app.listen(PORT,()=>console.log(`Server Port: ${PORT}`))


