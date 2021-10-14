import { configObj } from "../environments/environments.js";
import { getData } from "../services/getData.js";
import { deletePictureFromFB } from "./deletePictureFromFB.js";



document.querySelector('.btn__main__show__localDB').addEventListener('click', () => {
    getPicturesFromFB();
});

function getPicturesFromFB() {
    getData(`${configObj.urlImageFB}pictures.json`)
    .then(data => Object.values(data))
    .then(data => {
        data.forEach(item => {
            document.querySelector('.main-images-localDB').innerHTML += `
            <div class="product-item">
                <img class="pictures__from__FB" src="${item.url}"/>
                <div class="product-list">
                    <h3>${item.title}</h3>
                    <button class="button btn__del__picture">Удалить</button>
                </div>
            </div>
            `;
        });
    })
    .then(data => new Promise((resolve, reject) => {
        deletePictureFromFB();
        resolve();
    }));
}