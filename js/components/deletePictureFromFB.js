import { configObj } from "../environments/environments.js";
import { deleteData } from "../services/deleteData.js";


export function deletePictureFromFB() {
    document.querySelectorAll('.btn__del__picture').forEach(item => {
        item.addEventListener('click',() => {
            const id = item.parentElement.parentElement.id;
            deleteData(`${configObj.urlImageFB}pictures/${id}.json`);
            alert('Картинка успешно удалена');
            document.location.reload();
        });
    });
}