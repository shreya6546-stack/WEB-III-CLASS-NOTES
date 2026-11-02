import http from'http'
const server = http.createServer((req,res)=>{
    if(req.url === '/' && req.method ==='GET'){
        res.end('<h1>Welcome to Backend<h1>')
    }else if(req.url ==='/about' && req.method === 'GET'){
        res.end('<h1>This is About Page<h1>')
    }else if(req.url ==='/contact' && req.method === 'GET'){
        res.end('<h1>This is Contact Page<h1>')
    }else if(req.url ==='/home' && req.method === 'GET'){
        res.end('<h1>This is Home Page<h1>')
    }else{
        res.end('<h1>404 page not found<h1>')
    }


})
const port = 3000
server.listen(port,()=>{
    console.log('server has created at port', port)

})


