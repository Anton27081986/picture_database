import { MyLocalStorage } from "./useLocalStorage.js";



export function checkedMove() {
    window.addEventListener('mousemove', (event) => {
        console.log('test');
        if (event.pageX === event.pageX && event.pageY === event.pageY) {
            console.log('test2');
            MyLocalStorage.removeLocalStorageItem('idToken');
        }
    });
}






