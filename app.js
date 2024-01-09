const fromAnotherFile = require("./js/func.js")
const express = require("express");
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.port || 3000;

app.set('view engine', 'hbs')

app.get('/', function (req, res) {
 const sample = () => {
 return 'proba'
 }
 res.render('index', {
 pageTitle: "Our Website",
 subTitle: fromAnotherFile.someTitle,
 anotherTitle: sample()
 })
})

app.get('/about', function (req, res) {
 res.send("Our Website")
})

const path = require('path')
app.use('/assets', express.static(path.join(__dirname, "./assets")));

app.use('/js', express.static(path.join(__dirname, "./js")));


app.listen(port, (err) => {
 if (err) {
 return console.log("coś poszło nie tak...:", err)
 }
 console.log("serwer działa na porcie", port)
}) 