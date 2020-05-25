const express = require('express');
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

app.listen(8081, function () {
  console.log('Example app listening on port 8081')
});

const serveFile = (req, res) => {
  console.log('hitting the endpoint /')
  res.sendFile(path.resolve('dist/index.html'))
};

app.get('/', serveFile)

app.post('/tripinfo', async (req, res) => {
  console.log('hitting the POST /tripinfo endpoint');
  console.log(req.body);


  res.send({ status: 'OK' })
})

app.get('/health', (req, res) => {
  console.log('hitting the GET /tripinfo endpoint');
  // console.log(req.body);
  res.send('OK')
})