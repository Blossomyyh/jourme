var express = require("express");
var app = express();
const path = require('path');
const routes = require('./routes');

var request = require("request")
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
const ejs = require("ejs");


app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost/jourme', { useNewUrlParser: true , useUnifiedTopology: true});

//connect to mongodb

// app.get("/",function (req,res) {
//   res.render("welcome");
// });



// Set the default views directory to html folder
app.set('views', path.join(__dirname, 'views'));
// Set the folder for css & java scriptss
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.set("view engine","ejs");

app.use('/', routes);
app.listen(3000,function(){
  console.log('Server has started!');
});



