import { configObj } from "../environments/environments.js";

const btnLocalDB = document.querySelector('.btn__local__db');

function setListenerLocalDB(element, type, hendler) {
    if(!element) {
        return;
    }
    element.addEventListener(type, hendler);
}

setListenerLocalDB(btnLocalDB, 'click', getPageLocalDB);

// document.querySelector('.btn__local__db').addEventListener('click', getPageLocalDB);

export function getPageLocalDB() {
    document.location.replace(configObj.urlLocalDB);
}