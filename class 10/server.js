import express from 'express'

const app = express()

const port = 3000

import connectDB from './database/mongodb.js';
import router from './routes/userRoute.js';
connectDB();

app.use(express.json())
app.use(router)

app.listen(port, ()=>{
    console.log('server has started at 3000')
})
