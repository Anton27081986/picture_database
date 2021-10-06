import { configObj } from "../environments/environments.js";

const btnCloud = document.querySelector('.btn__cloud');

function setListenerCloud(element, type, hendler){
    if(!element) {
        return;
    }
    element.addEventListener(type, hendler);
}

setListenerCloud(btnCloud, 'click', getPageCloud);

// document.querySelector('.btn__cloud').addEventListener('click', getPageCloud);

export function getPageCloud(event) {
    event.preventDefault();
    console.log('TEST');
    document.location.replace(configObj.urlCloud);
}

