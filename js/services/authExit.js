import { configObj } from "../environments/environments.js";
import { MyLocalStorage } from "./useLocalStorage.js";

const btnExit = document.querySelector('.btn__exit');

function setListenerExit(element, type, hendler) {
    if (!element) {
        return;
    }
    element.addEventListener(type, hendler);
}

setListenerExit(btnExit, 'click', exitToStartPage);

// document.querySelector('.btn__exit').addEventListener('click', exitToStartPage);

export function exitToStartPage() {
    if(!MyLocalStorage.getLocalStorageItem()) {
        MyLocalStorage.clearLocalStorageItem();
        location.assign(configObj.urlStart);
    }
}




// function exitToStartPage() {
//     document.querySelector('.btn__exit').addEventListener('click', () => {
//         if(!MyLocalStorage.getLocalStorageItem()) {
//             MyLocalStorage.clearLocalStorageItem();
//             location.assign(configObj.urlStart);
//         }
//     });
// }
// exitToStartPage();

// export {exitToStartPage};