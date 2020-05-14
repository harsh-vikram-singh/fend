// helper functions

// getting user data
queryWeatherApi = async (baseURL, zipCode, key) => {
  const result = await fetch(baseURL + zipCode + key)

  try {
    console.log('received the following data from the api')
    data = await result.json()
    console.log(data)
  } catch (e) {
    console.log('some error occured in fetching the data from the api...')
    console.log(e)
  }

  console.log(data.main.temp)
  console.log(getUserFeelings())

  const postData = {
    temperature: data.main.temp,
    date: newDate,
    userResponse: getUserFeelings()
  }

  updateUiElements(postData);

  console.log(postData);
}

getWeatherData = () => {
  const zipCode = getZip();
  queryWeatherApi(baseURL, zipCode, key);
}

// sending the post request to the server


// updating the ui elements
function updateUiElements(postData) {
  const date = document.querySelector('#date');
  const content = document.querySelector('#content');
  const temp = document.querySelector('#temp')

  date.innerText = postData.date;
  temp.innerText = postData.temperature;
  content.innerText = postData.userResponse;
}


/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='

const key = '&appid=4bca55d07094f42e10d3cb5ce010c69c'


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

console.log('msg from app.js')

function getZip() {
  console.log('getZip function ran')
  return document.querySelector('#zip').value;
}

function getUserFeelings() {
  return document.querySelector('#feelings').value
}

const generate = document.querySelector('#generate');

generate.addEventListener('click', getWeatherData)



