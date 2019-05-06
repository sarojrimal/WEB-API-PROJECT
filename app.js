const express = require('express');
const app = express();

const path = require('path');
const publicDirectory = path.join(__dirname,'public');

app.use(express.static(publicDirectory));


app.set('view engine','hbs')

app.get('/', function(req, res){
    res.render('aa',{name:'Name : Saroj Rimal', phone:'Phone : 1234', address:'Address : dillibazar', email:'Email : zaan@gmail.com'});

 })

 app.listen(5000);