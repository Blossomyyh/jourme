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

// Set the default views directory to html folder
app.set('views', path.join(__dirname, 'views'));
// Set the folder for css & java scriptss
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.set("view engine","ejs");

app.use('/', routes);

app.get('/writealltags', (req, res) => {
  const fs = require('fs');
  let usertags = JSON.parse(fs.readFileSync('./models/initUserTag.json', 'utf8'));
  const UserTag = require('./models/tagModel');
  UserTag.insertMany(usertags,function(err,res){
    if(err)  console.log(err);
  });
});

app.get('/showalltags', (req, res) => {  
  const UserTag = require('./models/tagModel');
  UserTag.find({},function(err,allUserTags){
  if(err)  console.log("error find");
  else res.send(allUserTags);
  });
});


app.listen(3000,function(){
  console.log('Server has started!');
});

