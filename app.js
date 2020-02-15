var express = require("express");
var app = express();
var request = require("request")
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
app.set("view engine","ejs");


app.use(bodyParser.urlencoded({extended:true}));
// mongoose.connect("mongodb://localhost/jourme");
mongoose.connect('mongodb://localhost/jourme', { useNewUrlParser: true , useUnifiedTopology: true});

//connect to mongodb

// app.get("/",function (req,res) {
//   res.render("welcome");
// });

app.get("/",function(req,res){
  res.render("welcome");
});
app.listen(3000,function(){
  console.log('Server has started!');
});