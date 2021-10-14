import { configObj } from "../environments/environments.js";
import { deleteData } from "../services/deleteData.js";


export function deletePictureFromFB() {
    document.querySelectorAll('.btn__del__picture').forEach(item => {
        item.addEventListener('click',() => {
            console.log(item.parentElement.parentElement.querySelector('.pictures__from__FB').src);
            const objDeleteImage = {
                title: item.parentElement.querySelector('h3').textContent,
                url: item.parentElement.parentElement.querySelector('.pictures__from__FB').src,
            }; 
            const title = item.parentElement.querySelector('h3').textContent;
                
            
            deleteData(`${configObj.urlImageFB}pictures.json`);
        });
    });
}