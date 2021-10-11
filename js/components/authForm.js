import { configObj } from "../environments/environments.js";
import { postData } from "../services/authPostData.js";
import { MyLocalStorage } from "../services/useLocalStorage.js";


const inputEmail = document.querySelector('.input__mail'),
      inputPassword = document.querySelector('.input__password');
    //   inputForm = document.querySelector('.input__form');
      
// function setListenerForm(element, type, hendler) {
//     if (!element) {
//         return;
//     }
//     element.addEventListener(type, hendler);
// }

// setListenerForm(inputForm, 'submit', getDataForm);

document.querySelector('form').addEventListener('submit', getDataForm);


function getDataForm(event) {
    event.preventDefault();

    const inputObj = {
        email: inputEmail.value,
        password: inputPassword.value
    };

    postData(configObj.url, configObj.apiKey, inputObj.email, inputObj.password)
    .then(data => {
        if(!data.idToken) {
            alert('Данные не верны');
            return;
        }
        
        if(!MyLocalStorage.getLocalStorageItem('idToken')) {
            MyLocalStorage.setLocalStorageItem('idToken', data.idToken);
            document.location.assign(configObj.urlCloud);
        }

        if (MyLocalStorage.getLocalStorageItem('idToken')) {
            document.location.assign(configObj.urlCloud);
        }
    });
}

export {getDataForm};