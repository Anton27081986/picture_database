import { configObj } from "../environments/environments.js";
import { getData } from "../services/getData.js";
import { deletePictureFromFB } from "./deletePictureFromFB.js";



// document.querySelector('.btn__main__show__localDB').addEventListener('click', () => {
//     getPicturesFromFB();
// });

function getPicturesFromFB() {
    getData(`${configObj.urlImageFB}pictures.json`)
    .then(data => Object.entries(data))
    .then(data => {
        data.forEach(item => {
            document.querySelector('.main-images-localDB').innerHTML += `
            <div id=${item[0]} class="product-item">
                <img class="pictures__from__FB" src="${item[1].url}"/>
                <div class="product-list">
                    <h3>${item[1].title}</h3>
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

getPicturesFromFB();