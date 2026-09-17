// const product = require('./math.js')
// console.log(product(30,40))

// const sum = require('./math.js')

// import {sum, divide} from './math.js'
// console.log(sum(30,40))
// console.log(divide(30,5))

// import os from'os'
// console.log(os.platform())
// console.log(os.type())
// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.totalmem()/1024/1024/1024)
// console.log(os.hostname())
// console.log(os.uptime()/60/60)

// import path from 'path'
// console.log(path.basename('./parent/chils.js'))
// console.log(path.extname('./parent/child.js'))
// console.log(path.dirname('./parent/child.js'))

// let newPath = path.join('parent','child.js')      creates new path
// console.log(newPath)

// console.log(path.sep)
// console.log(path.resolve())

// import fs from 'fs'
// fs.mkdir('parent', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
// })

// fs.writeFile('./parent/child.js/index.html', '<h1>hello world</h1>', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
// })

// fs.readFile('./parent/child.js/index.html', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

// import dns from 'dns'
// dns.lookup('facebook.com', (err,address)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(address)
// })

// dns.reverse('163.70.146.35',(err,domain)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(domain)
// })

import crypto from 'crypto'
// let password = '123456'
// let hashpassword = crypto.createHash('sha256').update(password).digest('hex')
// console.log(hashpassword)

console.log(crypto.randomUUID())

