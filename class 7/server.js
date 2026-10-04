import express from "express";
const app = express() 

const port = 3000

import morgan from "morgan";

// app.use(express.static('public'))

// app.use(express.json())
//mid way ko run krne ka do tareeke h global or route 
app.use(morgan('dev'))//third party middleware
app.use(loggerMiddleware) //custom middleware


// app.use(express.urlencoded({
//     extended:true
// }))



function middleware1(req,res,next){
    console.log('this is middleware first')

    next()

}


function loggerMiddleware(req,res,next){
    console.log(req.method)
    console.log(req.url)
    console.log(res.status)

    next() //we use next cuz next will call next function cuz middleware stops mid way 

}

// app.use(middleware1)

app.post('/user', loggerMiddleware , middleware1  , (req,res)=>{
    
    console.log('this is main logic....')
 
    // console.log(req.body)

    res.send('response sent') 
})



app.post('/about', (req,res)=>{

        console.log('this is about logic')
           res.send("<h1>About Us</h1>")
})


app.listen(port, ()=>{
    console.log('server has started at port : ', port)
 
})
// logger middle ware print method and url (custom middleware)