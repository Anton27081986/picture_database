import { configObj } from "../environments/environments.js";
import { getData } from "../services/getData.js";
import { imagePostData } from "../services/postData.js";

const btnShow = document.querySelector('.btn__main__show'),
      divImages = document.querySelector('.main-images'),
      btnsAddImage = document.querySelectorAll('.button__add__image');

function setListenerCloud(element, type, hendler){
    if(!element) {
        return;
    }
    element.addEventListener(type, hendler);
}

setListenerCloud(btnShow, 'click', getDataFromAPI);

document.querySelector('.btn__cloud').addEventListener('click', showPageCloud);

export function showPageCloud(event) {
    event.preventDefault();
    document.location.replace(configObj.urlCloud);
}

// btnShow.addEventListener('click', getDataFromAPI);


function getDataFromAPI() {
    console.log('Загрузка данных...');
    getData(`https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${configObj.apiKeyFlickr}&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1`)
    .then(data => {
        data.photos.photo.forEach(item => {
            divImages.insertAdjacentHTML('afterbegin', `
            <div class="product-item">
                <img class="pictures__in__cloud" src="https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg"/>
                <div class="product-list">
                    <h3>${item.title}</h3>
                    <button class="button button__add__image">Добавить в коллекцию</button>
                </div>
            </div>
            `);
        });
        
    })
    .then(data => new Promise((resolve, reject) => {
        
        addImageToCollection();
        resolve();
        
    }));
    
}

function addImageToCollection() {
    
    document.querySelectorAll('.button__add__image').forEach(item => {
        item.addEventListener('click', () => {
            console.log(item.parentElement.parentElement.querySelector('.pictures__in__cloud').src);
            const objImageForFB = {
                title: item.parentElement.querySelector('h3').textContent,
                url: item.parentElement.parentElement.querySelector('.pictures__in__cloud').src
            };
            imagePostData(`${configObj.urlImageFB}pictures.json`, objImageForFB);
            
        });
    });
}




















// https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=c494d0c36c1ef5c9851f47d266649611&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1


{/* <div class="product-item">
<img src="https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg"/>
  <div class="product-list">
    <h3>${item.title}</h3>
      <a href="" class="button">Добавить в локальное хранилище</a>
  </div>
</div> */}