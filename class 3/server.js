// let num1 = Number(process.argv[2])
// let num2 = Number(process.argv[3])
// let operation = process.argv[4]

// let result;
// if(operation == 'add'){
//     console.log(num1+num2)
// }else if(operation == 'multiply'){
//     console.log(num1*num2)
// }

// console.log(num1)
// console.log(num2)
// console.log(process.argv)


// console.log(process.cwd())



let num1 = Number(process.argv[2])
let num2 = Number(process.argv[3])

let operation = process.argv[4]
let result;
if(operation == 'add'){
    console.log("result:",num1+num2)
    result = num1+num2
}else if(operation == 'subtract'){
    console.log("result:", num1-num2)
    result = num1-num2
}else if(operation == 'multiply'){
    console.log("result:", num1*num2)
    result = num1*num2
}else if(operation == 'divide'){
    if(num2 === 0){
        console.log("error: cannot divide by zero")
    }else{
        console.log("result:", num1/num2)
        result = num1/num2
    }    
        
}else{
    console.log("invalid operation");
    console.log("use: add, subtract, multiply, divide")
}
console.log(result)
// console.log(process.argv)