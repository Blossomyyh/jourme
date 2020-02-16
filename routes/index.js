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

router.get('/user', (req, res) => {
    console.log('Request for about page recieved');
    var email = req.body.email;

    res.render('user',  {
        day: today,
        todoList: todoList
    } );
});

router.get('/register', (req, res) => {
    res.render('register',{
        day: today,
    });
});

//change to /:id/character ?
router.post('/character',(req,res) => {
    console.log(req.body); //successful
    res.render('characteristic',{
        day: today,
        newUser: req.body,
    });
});

//not get
router.get('/attraction',(req,res) => {
    console.log(req.body); //successful
    res.render('attractionPrefer',{
        day:today,
    });
});

//not get
router.get('/restaurant',(req,res) => {
    console.log(req.body); //successful
    res.render('restaurantPrefer',{
        day:today,
    });
});

//not get
router.get('/startEnd',(req,res) => {
    console.log(req.body); //successful
    res.render('startEnd',{
        day:today,
    });
});

//not get
router.get('/displayRoute',(req,res) => {
    console.log(req.body);
    res.render('displayRoute',{
        day:today
    });
});
module.exports = router;