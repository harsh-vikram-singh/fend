// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/

const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);

app.get('/health', (req, res) => {
  console.log('GET request to endpoint /health')
  res.send('OK')
})

app.get('/projectdata', (req, res) => {
  console.log('GET request to endpoint /projectdata')
  res.send(projectData);
})

app.post('/projectData', (req, res) => {
  console.log('POST request to endpoint /projectdata')
  console.log(req.data)
  res.send('project data updated')
})

function listening() {
  console.log('server running');
  console.log(`running on localhost:${port}`);
}