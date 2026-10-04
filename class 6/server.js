import express from 'express'

const app = express()

const port = 3000

app.post('/user/:id', (req, res)=>{

    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    console.log(req.params)
    console.log(req.headers)
    console.log(req.query)

    // res.json({
    //     message:"this is user route"
    // })
    res.status(201)
    res.send("this is backend server")    //OR res.status(201).send("this is backend server")
})
app.listen(port, ()=>{
    console.log("server has started at:", port)
})