const express = require('express');
const router = express.Router();
var mongoose = require("mongoose");
let today = new Date();
let todoList = ["Sleep","Eat","?"];

router.get("/",function(req,res){
  res.render("welcome",  {
    day: today,
    todoList: todoList
  } );
});

// IIFE (Immediately Invoked Function Expression) ---runs as soon as it is defined. (function () {statements })();
// router.get('/', (req, res) => {
//   console.log('Request for home recieved');
//   res.render('welcome');
// });

router.get('/user', (req, res) => {
  console.log('Request for about page recieved');
  var email = req.body.email;
  
  res.render('user',  {
    day: today,
    todoList: todoList
  } );
});

router.get('/register', (req, res) => {  
  res.render('newUser',{
    day: today,
  });
});

router.post('/character',(req,res) => {
  console.log(req.body); //successful
  res.render('characteristic',{
    day: today,
    newUser: req.body,
  });
});


module.exports = router;