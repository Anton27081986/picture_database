
import {configObj} from '../environments/environments.js';


export async function authPostData(url, apiKey, email, password) {

    const result = await fetch(`${url}${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password, returnSecureToken: true}),
    }); 

    return await result.json();
}

export async function imagePostData(url, data) {
    const result = await fetch(url , {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await result.json();
}