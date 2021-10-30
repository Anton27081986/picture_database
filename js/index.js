
import { getDataForm } from "./components/authForm.js";
import { getPageCloud } from "./components/btnCloud.js";
import { getPageLocalDB } from "./components/btnLocalDB.js";
import { configObj } from "./environments/environments.js";
import { exitToStartPage } from "./services/authExit.js";
// import { postData } from "./services/authPostData.js";
// import { checkedURL } from "./services/checkUrl.js";
import { MyLocalStorage } from "./services/useLocalStorage.js";
import {checkedMove} from "./services/checkMouseMove.js";


// checkedURL();
// getDataForm();
// getPageCloud();
getPageLocalDB();
exitToStartPage();

setInterval (() => console.log('tik'), 5000);
