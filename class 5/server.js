import express from 'express'
const app = express()
app.use(express.json())
import userRouter from './routes/userRoute.js'
app.use(userRouter)
const port = 3000
app.listen(port, ()=>{
    console.log('server has started at', port)
})