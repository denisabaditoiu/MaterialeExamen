const express = require("express")
const app = express();
const data = require('./invoice.json');

app.use('/', express.static('public'))


app.get('/data', (req, res) => {
    res.status(200).send(data);
})

app.listen(8080);

module.exports = app;