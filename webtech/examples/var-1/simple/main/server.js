const express = require("express")
const app = express()
let jsonData = require('./article.json');

app.use('/', express.static('public'))


app.get('/data', (req, res)=>{
    res.status(200).send(jsonData);
})
app.listen(8080);

module.exports = app;