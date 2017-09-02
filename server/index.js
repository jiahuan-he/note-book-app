const express = require('express')

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res, next) {
    res.send('get')
});

app.post('/', function(req, res, next) {
    res.send('post')
});


app.listen(process.env.PORT , process.env.IP, function () {
    console.log('Example app listening on port 3000!')
});