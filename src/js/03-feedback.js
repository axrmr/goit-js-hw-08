import throttle from 'lodash.throttle';
// Object with { save, get,remove} methods to manage LOCALSTORAGE data.
import $localStorage from './local-storage-api';

const FEEDBACK_FORM_KEY = 'feedback-form-state';
const feedbackFormEl = document.querySelector('.feedback-form');
const formData = {};

feedbackFormEl.addEventListener('input', throttle(onFormInput, 1000));
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

setFormFieldsData();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  $localStorage.save(FEEDBACK_FORM_KEY, formData);
}

function onFeedbackFormSubmit(e) {
  e.preventDefault();

  if (!this.email.value || !this.message.value) {
    alert('Please, fill all the fields.');

    return;
  }

  console.log(formData);

  this.reset();

  $localStorage.remove(FEEDBACK_FORM_KEY);
}

function setFormFieldsData() {
  if (!$localStorage.get(FEEDBACK_FORM_KEY)) {
    return;
  }

  const { email, message } = $localStorage.get(FEEDBACK_FORM_KEY);

  feedbackFormEl.email.value = email || '';
  feedbackFormEl.message.value = message || '';
}
