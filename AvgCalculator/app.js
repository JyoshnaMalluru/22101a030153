const express = require("express");
const app = express();
const port = 9876;
// const path = require("path");

// app.use(express.urlencoded({extended : true}));
// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));
// app.use(express.static(path.join(__dirname,"public")));
let even = function evennumbers(n){
    let arr = [];
    for(let i=0;i<=n;i++){
        if(i%2 == 0){
            arr.push(i);
        }
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
    }else{
         res.json({"key":id});
    }
    // console.log(id);
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})