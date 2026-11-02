import express from 'express'

const app = express()

const port = 3000

import connectDB from './database/mongodb.js'
connectDB()

app.listen(port, ()=>{
    console.log('server has started at 3000')
})
