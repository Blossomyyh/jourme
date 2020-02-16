const express = require('express');
const router = express.Router();
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
  res.render('user',  {
    day: today,
    todoList: todoList
  } );
});

router.get('/register', (req, res) => {
    console.log('Request for about page recieved');
    res.render('register',  {
      day: today,
      todoList: todoList
    } );
});

module.exports = router;