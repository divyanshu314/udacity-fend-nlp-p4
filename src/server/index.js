const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const bodyParser = require('body-parser');
const  cors = require('cors');

// Require the Aylien npm package
var aylien = require("aylien_textapi");
var aylienapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(cors())
app.use(express.static('dist'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/testing', async (req, res, next) => {
    try {
        var data = aylienapi.sentiment({
            'text': req.body.query
        }, function(err, response){
            if (err === null){
                console.log(response);
                res.send(response);
            }
        });
    } catch (error) {
        return next(error);
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
