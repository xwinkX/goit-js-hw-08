import throttle from 'lodash.throttle';

const MESSAGE_KEY = 'local-value';
const formData = {};

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form textarea');
const emailEl = document.querySelector('.feedback-form input');
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(element, 500));

function element(event) {
  formData[event.target.name] = event.target.value || ``;
  localStorage.setItem(MESSAGE_KEY, JSON.stringify(formData));
}

valueTextarea();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  delete formData.message;
  delete formData.email;
  console.log(JSON.parse(localStorage.getItem(MESSAGE_KEY)));
  localStorage.removeItem(MESSAGE_KEY);
}

function valueTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(MESSAGE_KEY));
  if (savedMessage) {
    emailEl.value = savedMessage.email || ``;
    inputEl.value = savedMessage.message || ``;
  }
}
