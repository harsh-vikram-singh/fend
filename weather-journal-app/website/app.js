/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const key = '&appid=4bca55d07094f42e10d3cb5ce010c69c&units=metric'
var postData = {};


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

// helper functions

// getting user data
queryWeatherApi = async (baseURL, key) => {
  const zipCode = getZip();
  const result = await fetch(baseURL + zipCode + key)
  try {
    // console.log('received the following data from the api')
    data = await result.json()
    postData = {
      temperature: data.main.temp + ' degree celsius',
      date: newDate,
      userResponse: getUserFeelings()
    }
    return postData;
  } catch (e) {
    console.log('some error occured in fetching the data from the api...')
    console.log(e)
  }
  // console.log(data.main.temp)
  // console.log(getUserFeelings())

  // console.log(postData);
}

// sending the post request to the server
async function sendPostData(postData) {
  // console.log('func: sendPostData')
  const response = await fetch('http://localhost:8000/projectData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  // console.log('the server sent the following response:')
  // console.log(response.json())
  return response.json()
}

// sending GET request to the server to get the user's data entered
async function getUserData() {
  const resp = await fetch('http://localhost:8000/projectdata');
  try {
    const userData = await resp.json();
    return userData;
  } catch (e) {
    console.log('some error occurred in fetching the data from the server')
    console.log(e)
  }
}

// updating the ui elements
function updateUiElements(postData) {
  // console.log('func: updateUiElements')
  const date = document.querySelector('#date');
  const content = document.querySelector('#content');
  const temp = document.querySelector('#temp')

  date.innerHTML = postData.date;
  temp.innerHTML = postData.temperature;
  content.innerHTML = postData.userResponse;
}

// wrapper function to do the following tasks:
//  1. get data from the weather api
//  2. post data to the express server
//  3. use the data returned and update the ui elements
async function completeFlow() {
  const weatherInfo = await queryWeatherApi(baseURL, key);
  const postReturn = await sendPostData(weatherInfo);
  const userData = await getUserData();
  updateUiElements(userData)
}

// this function returns the zip code entered by the user
function getZip() {
  console.log('getZip function ran')
  return document.querySelector('#zip').value;
}

// this function returns the feelings entered by the user
function getUserFeelings() {
  return document.querySelector('#feelings').value
}

const generate = document.querySelector('#generate');

generate.addEventListener('click', completeFlow)