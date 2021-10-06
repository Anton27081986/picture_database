

export class MyLocalStorage {
    static getLocalStorageItem(key) {
        localStorage.getItem(key);
    }
    static setLocalStorageItem(key, value) {
        localStorage.setItem(key, value);
    }
    static clearLocalStorageItem() {
        localStorage.clear();
    }
    static removeLocalStorageItem(key) {
        localStorage.removeItem(key);
    }
}