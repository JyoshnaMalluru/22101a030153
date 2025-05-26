const express = require("express");
const app = express();
const port = 9876;

let even = function evennumbers(n){
    let arr = [];
    let cnt = 0;
    let i=0;
   while(cnt<n){
        if(i%2 == 0){
            arr.push(i);
            cnt++;
        }
        i++;
    }
    return arr;
}
let prime = function primenumbers(n){
    let arr = [];
    arr.push(2);
    let cnt = 0;
    let i=3;
    while(cnt <n){
        val = true;
        for(let j=2;j<i;j++){
            if(i%j == 0){
                val = false;
            }
        }
        if(val == true){
            arr.push(i);
            cnt++;
        }
        i++;
    }
    return arr;
}
let fib = function fibnumbers(n){
    let arr = [];
    let a =0;
    arr.push(0);
    let b = 1;
    arr.push(1);
    for(let i=3;i<=n;i++){
        let c= a+b;
        arr.push(c);
        a= b;
        b= c;
    }
    return arr;
}
let random = function randomnumbers(n){
    let arr = [];
    for(let i=1;i<=n;i++){
        let val = Math.floor(Math.random()*100)+1;
        arr.push(val);
    }
    return arr;
}
app.get("/numbers",(req,res)=>{
    // res.send("numbers");
    res.json({"key":"Number"});
})

app.get("/numbers/:id",(req,res)=>{
    let {id} = req.params;
    if(id == "e"){
        res.json({"numbers": even(10)})
    }else if(id == "p"){
        res.json({"numbers": prime(10)})
    }else if(id == "f"){
        res.json({"numbers": fib(10)})
    }else if(id == "r"){
        res.json({"numbers": random(10)})
    }else{
         res.json({"key":"Not a valid number"});
    }
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})