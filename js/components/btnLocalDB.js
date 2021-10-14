import { configObj } from "../environments/environments.js";

const btnLocalDB = document.querySelector('.btn__local__db'),
      headerImageLocal = document.querySelector('.header__image__local');

function setListenerLocalDB(element, type, hendler) {
    if(!element) {
        return;
    }
    element.addEventListener(type, hendler);
}

setListenerLocalDB(btnLocalDB, 'click', showPageLocalDB);

// document.querySelector('.btn__local__db').addEventListener('click', getPageLocalDB);

export function showPageLocalDB() {
    document.location.replace(configObj.urlLocalDB);
    headerImageLocal.classList.add('active');
}

