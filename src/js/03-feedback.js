import throttle from 'lodash.throttle';

let formData = {};

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormChange, 500));
form.addEventListener('submit', onSubmit);

function onFormChange(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

try {
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    for (let key in formData) {
      form.elements[key].value = formData[key];
    }
  }
} catch (error) {
  console.log(error.name);
}

function onSubmit(event) {
  event.preventDefault();
  console.log(formData);
  formData = {};
  localStorage.clear(STORAGE_KEY);
  event.target.reset();
}
