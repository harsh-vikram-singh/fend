import './styles/main.scss'
import './styles/_landingPage.scss'


const destination = document.querySelector('#destination');
const travelDate = document.querySelector('#travelDate');

// setting the default value of date to present date
const date = new Date();
const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
const dateValue = `${date.getFullYear()}-${month}-${date.getDate()}`;
travelDate.value = dateValue;

const submit = document.querySelector('#submit-btn');

let formData = {}

submit.addEventListener('click', e => {
  e.preventDefault();
  formData = {
    destination: destination.value,
    travelDate: travelDate.value
  }
  destination.value = "";
  travelDate.value = "";
  // console.log(e);
  console.log('submit button clicked')
  console.log(formData)
});