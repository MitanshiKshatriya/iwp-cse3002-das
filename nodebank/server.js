const express  = require('express')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const path = require('path')

//importing routes
const BankRoutes = require('./routers/BankRoutes')

//


//mongoose.connect('mongodb://localhost:27017/testdb')
mongoose.connect('mongodb://urmika:urmika@cluster0-shard-00-00.ju3qn.mongodb.net:27017,cluster0-shard-00-01.ju3qn.mongodb.net:27017,cluster0-shard-00-02.ju3qn.mongodb.net:27017/testdb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')

const db = mongoose.connection

//if error found log error
db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log('Database connected!')
})

const app = express()

//deal with info in urlencoded form
app.use(bodyParser.urlencoded({extended:true}))

//deal with info in json format
app.use(bodyParser.json())

//set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//including css and js files
const middlewares = [
  express.static(path.join(__dirname, 'public')),
];
app.use(middlewares);

const PORT = process.env.PORT || 5000

// app.get('/',function(req,res,next){
//     //res.sendFile(__dirname+"/index.html")
//     res.render('home')
// })

// app.post('/',function(req,res){
//     res.send("test post")
// })

app.listen(PORT,()=>{
    console.log(`Server runing on ${PORT}`)
})

app.use('/',BankRoutes)

//installing nodemon 
//1. npm i nodemon
//2. change scripts start to nodemon server.js
//3. type npm start


