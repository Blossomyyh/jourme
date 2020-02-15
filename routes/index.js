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

// router.get('/', (req, res) => {
//   console.log('Request for home recieved');
//   res.render('welcome');
// });

router.get('/person', (req, res) => {
  console.log('Request for about page recieved');
  res.render('person',  {
    day: today,
    todoList: todoList
  } );
});

router.get('/start', (req, res) => {
    console.log('Request for about page recieved');
    res.render('start',  {
      day: today,
      todoList: todoList
    } );
  });




module.exports = router;