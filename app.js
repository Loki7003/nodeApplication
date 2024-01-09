const express = require("express"); //nie korzystam już z http!!
const port = 3000;
const app = express();
//gdy uzytkownik wchodzi na stronę główną
app.get('/', function (req, res) {
 res.send("Hello World");
})
 //gdy uzytkownik wchodzi na stronę o nas
app.get('/about', function (req, res){
 res.send("My site")
})
app.listen(port, (err) => {
 if (err) {
 return console.log("coś poszło nie tak...:", err)
 }
 console.log("serwer działa na porcie", port)
}) 
// Podpięcie css
var path = require('path')
app.use('/assets', express.static(path.join(__dirname, "./assets")));