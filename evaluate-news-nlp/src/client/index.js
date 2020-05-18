// import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/base.scss';
import './styles/form.scss';

// val = document.querySelector('#name');

// console.log(handleSubmit);
const el = document.querySelector('#name');
const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', handleSubmit)

