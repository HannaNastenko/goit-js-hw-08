import throttle from 'lodash.throttle';

let formData = {};

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const btnSubmit = document.querySelector('button');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormChange, 500));
form.addEventListener('submit', onSubmit);

function onFormChange(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

if (localStorage.getItem(STORAGE_KEY)) {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
}

function onSubmit(event) {
  event.preventDefault();
  console.log(formData);

  localStorage.clear(STORAGE_KEY);
  event.target.reset();
}
