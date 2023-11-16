import Throttle from 'lodash.throttle';
import { common } from '../common.js';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', handlerSubmit);
form.addEventListener('input', Throttle(handlerInput, 500));

function handlerSubmit(e) {
    e.preventDefault();
    const target = e.currentTarget;

    const keyParsed = JSON.parse(localStorage.getItem(common.LS_KEY_FEEDBACK));
    const email = target.elements.email.value;
    const message = target.elements.message.value;

    if (email === '' || message === '') {
        return alert ('Enter data in all rows');
    }

    console.log(keyParsed);
    target.reset();
    localStorage.removeItem(common.LS_KEY_FEEDBACK);  
}

function handlerInput({ target }) {
    const formData = localStorage.getItem(common.LS_KEY_FEEDBACK)
    ? JSON.parse(localStorage.getItem(common.LS_KEY_FEEDBACK))
    : {};

    formData[target.name] = target.value;
    localStorage.setItem(common.LS_KEY_FEEDBACK, JSON.stringify(formData));  
}

formSaveData();

function formSaveData() {
    const saveData = localStorage.getItem(common.LS_KEY_FEEDBACK);

    if (saveData) {
        const data = JSON.parse(saveData);
        if (data.email) {
            form.elements.email.value = data.email;
        }
        if (data.message) {
            form.elements.message.value = data.message;
        }
    }
}