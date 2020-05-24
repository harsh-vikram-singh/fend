import './styles/main.scss'
import './styles/_landingPage.scss'
import getRemainingDays from './js/countdown';
import { addTodo, showTodoInput } from './js/addTodos';


const img = document.querySelector('#heroImage');

// setting the default value of date to present date
const date = new Date();
const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
const dateValue = `${date.getFullYear()}-${month}-${date.getDate()}`;
travelDate.value = dateValue;
travelDate.min = dateValue;

const submitButton = document.querySelector('#submit-btn');

let formData = {}

// handling form submission from the first page
submitButton.addEventListener('click', async e => {
  e.preventDefault();
  const destination = document.querySelector('#destination');
  const travelDate = document.querySelector('#travelDate');
  submitButton.innerText = "loading..."
  formData = {
    destination: destination.value,
    travelDate: travelDate.value
  }

  //////////////////////////////////////////////////////////////////
  console.log('calculating remaining days:')
  const remDays = getRemainingDays(formData);
  if (remDays > 15 || remDays < 0) {
    console.log('Please select a date in the next 15 days only...')
    return;
  } else formData['remainingDays'] = remDays;
  console.log(remDays);
  //////////////////////////////////////////////////////////////////

  // making request to the express server
  const serverResponse = await serverRequest(formData)
  console.log('server response: ', serverResponse)

  // getting the location information from the geonames api
  const locationInfo = locationSearch(formData.destination);
  const images = getImage(formData.destination);
  const [val, newUrl] = await Promise.all([locationInfo, images])
  console.log('val:', val)
  if (!typeof val === 'object') {
    console.log('Please select a location in the United Stated only.')
  }
  // console.log('test this:', val);

  // getting the weather api
  const weather = await weatherForecast(val.lat, val.lng);

  // calling the function to make the ui changes that displays the trip details
  makeUiChanges(weather, formData);

  submitButton.innerText = "Submit"

  destination.value = "";
  travelDate.value = "";
  // console.log(e);
});

const locationSearch = async term => {
  const testData = await fetch(`http://api.geonames.org/searchJSON?q=${term}&maxRows=1&username=emily263`);
  const resp = await testData.json();
  // console.log(resp)
  const { lat, lng } = resp.geonames['0'];
  // console.log(lat, lng)
  return { lat, lng };
}

const weatherForecast = async (lat, lon) => {
  const testData = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&key=c439b0d8aa6d4e2a80fa3cf22c1384ca`)
  const resp = await testData.json();
  return resp;
}

const getImage = async (term) => {
  console.log('requesting for pictures from pixabay')
  const testData = await fetch(`https://pixabay.com/api/?q=${term}&image_type=photo&key=2928914-49ce920a531a1db6102f4c509`);
  const resp = await testData.json();
  const destinationUrl = resp.hits['0'].largeImageURL;
  img.src = destinationUrl;
  return destinationUrl;
}

const serverRequest = async (userData) => {
  const resp = await fetch('http://localhost:8081/tripinfo', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  // console.log(resp)
  const response = await resp.json();
  return response;
}

const makeUiChanges = async (forecast, formData) => {
  console.log('inside the function to make the ui changes')

  // selecting the elements to hide
  const tagline = document.querySelector("#tagline");
  const form = document.querySelector("form");

  // hiding the elements
  tagline.classList.add('hidden');
  form.classList.add('hidden');

  // selecting the elements to display:
  const destinationName = document.querySelector("#destinationName");
  const tripDetails = document.querySelector("#tripDetails");

  // setting the name of the destination on the details page:
  destinationName.innerText = formData.destination
  tripDetails.classList.remove("hidden")

  // generating the weather details
  console.log(forecast);
  const daysOut = formData.remainingDays;
  console.log(daysOut);
  console.log(forecast.data[daysOut])
  const { app_max_temp, app_min_temp, precip, wind_spd } = forecast.data[daysOut];
  const weatherUpdate = `
  <h6>Maximum temperature: <span>${app_max_temp}</span>
    </h6>
    <h6>Minimum temperature: <span>${app_min_temp}</span>
    </h6>
    <h6>Approx wind speed of: <span>${wind_spd}</span>
    </h6>
    <h6>Precipitation: <span>${precip}</span>
    </h6>
  `

  // selecting the element to append the forecast to:
  document.querySelector("#weatherForecast").innerHTML = weatherUpdate;
}

// implementing the functionality to add todo elements
document.querySelector('#todos-button').addEventListener('click', () => {
  showTodoInput();
  document.querySelector('#addTodoButton').addEventListener('click', addTodo)
  document.querySelector('#addTodoInput').addEventListener('keypress', e => {
    if (e.key === "Enter") {
      addTodo();
    }
  })
});