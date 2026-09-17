import express from "express";
const app = express()

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('<h1>welcome to express<h1>')
})

app.get('/about', (req,res)=>{
    res.send('<h1>this is about page<h1>')
})

let users = ['rahul', 'mansi', 'sachin', 'priya']

app.put('/updateuser',(req,res)=>{
    let name = req.body.name
    let newname = req.body.newname
    let index = users.indexOf(name)
    users[index] = newname
    res.status(200).json({
        message:"users updated successfully...",
        users,
        success: true
    })
})

app.delete('/deleteuser', (req,res)=>{
    let name = req.body.name
    let index = users.indexOf(name)
    users.splice(index, 1)
    res.status(200).json({
        message: "data deleted successfully...",
        users,
        success:true
    })
})


app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})
