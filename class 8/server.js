import express from 'express';
const app = express();
const port = 3000;
app.get('/user',(req,res)=>{
    try{
    res.json({
        message:'this is user routes...'

    })}catch(err){
        res.json({
            message:'something went wrong',
            error:err.message
        })
    }
})

function checkRoutes(req,res){
    res.json({
        message:'this routes is not available...'
    })
}
app.use(checkRoutes)

app.listen(port,()=>{
    console.log('server has started at port : ', port)
})