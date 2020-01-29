const express = require("express")
// completat de aici
let jsonData = require('./invoice.json');
// console.log(jsonData);

const app = express()
app.use('/', express.static('public'));

//fac get
app.get('/data', (req, res)=>{
    res.status(200).send(jsonData);
})

app.listen(8080);

module.exports = app;