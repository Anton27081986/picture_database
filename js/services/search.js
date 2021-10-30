import {getData} from "./getData.js";
import {configObj} from "../environments/environments.js";
import {addImageToCollection} from "../components/btnCloud.js";

document.querySelector('.btn__serch').addEventListener('click', (event) => {
    event.preventDefault();
    searchImagesInCloud();
});

function searchImagesInCloud() {
    getData(`https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${configObj.apiKeyFlickr}&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1`)
    .then(data => {
        filterSearchImages(data.photos.photo, document.querySelector('.input__search').value);
        addImageToCollection();
        
    });
}

function filterSearchImages(data, inputData) {
    console.log(data);
    let arrImages = [];
    arrImages = data.filter(item => item.title == inputData);
    // console.log(arrImages);
    // console.log(arrImages.title);
    document.querySelector('.main-images').innerHTML = `
    <div class="product-item">
        <img class="pictures__in__cloud" src="https://farm${arrImages[0].farm}.staticflickr.com/${arrImages[0].server}/${arrImages[0].id}_${arrImages[0].secret}.jpg"/>
        <div class="product-list">
            <h3>${arrImages[0].title}</h3>
            <button class="button button__add__image">Добавить в коллекцию</button>
        </div>
    </div>
    `;
}