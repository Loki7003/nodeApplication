const fromAnotherFile = require("./functions")
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", 'hbs')

app.get('/', function (req, res) {
 const sample = () => {
 return 'proba'
 }
 res.render('index', {
 pageTitle: "Lekcja01",
 subTitle: fromAnotherFile.someTitle,
 anotherTitle: sample()
 })
})

app.get('/about', function (req, res) {
 res.send("My site")
})

var path = require('path')
app.use('/assets', express.static(path.join(__dirname, "./assets")));

app.use('/js', express.static(path.joisssn(__dirname, "./js")));

app.listen(port, (err) => {
 if (err) {
 return console.log("coś poszło nie tak...:", err)
 }
 console.log("serwer działa na porcie", port)
}) 