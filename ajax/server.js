const express = require('express');

const bodyParser = require("body-parser")
const path = require('path');
const httpMsgs = require("http-msgs")

const app = express();

app.listen(9000)

app.use(bodyParser.urlencoded({extended:false})
)

// app.use(express.static("assets"))
app.use("/static", express.static('./static/'));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"/index.html"))
})

app.post("/demo",function(req,res){
    // var data = req.body

    // console.log(data.text)
    // httpMsgs.sendJSON(req,res,{
    //     from: "server"
    // })
    var num = req.body.text
    
    console.log(num)

    var number = parseInt(num, 10);

    var prizewon;
      if(number%10==7){
        prizewon=1000
      }
      
      else if(number%10==9){
        prizewon=3000
      }
      
      else{
      prizewon=100 
      }
    httpMsgs.sendJSON(req,res,{
        prize: prizewon
    })
})