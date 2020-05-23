const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/', function (req, res) {
    console.log('hitting the endpoint /')
    res.sendFile(path.resolve('dist/index.html'))
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    console.log('hitting the /test endpoint')
    res.send(mockAPIResponse)
})

app.post('/aylien', async (req, res) => {
    console.log('hitting the /aylien endpoint');
    console.log(req.body)

    console.log('initializing the request to aylien text api...')
    resp = textapi.sentiment(req.body, async function (error, response) {
        if (error === null) {
            console.log('printing from inside:', response);
            return res.send(response)
        } else {
            console.log('some error occurred')
        }
    });

})


var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
    application_id: "68bc62ad",
    application_key: "c4b71dc7f08b52b4141bf863067587ad"
});


