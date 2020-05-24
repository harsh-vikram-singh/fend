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
})

app.get('/', function (req, res) {
  console.log('hitting the endpoint /')
  res.sendFile(path.resolve('dist/index.html'))
  // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/tripinfo', async (req, res) => {
  console.log('hitting the POST /tripinfo endpoint');
  console.log(req.body);

  // calling the pixabat api to get destination pictures

  res.send({ status: 'OK' })
})

app.get('/tripinfo', async (req, res) => {
  console.log('hitting the GET /tripinfo endpoint');
  // console.log(req.body);
  res.send('info returned from the server')
})