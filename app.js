const express = require('express');
const app = express();

const path = require('path');
const publicDirectory = path.join(__dirname,'public');

app.use(express.static(publicDirectory));


app.set('view engine','hbs')

app.get('/', function(req, res){
    res.render('home');
 })

 app.listen(5000);