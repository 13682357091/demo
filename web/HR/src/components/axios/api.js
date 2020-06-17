import { POST, POST_WITH_AUTH, GET } from "./fetch"; //引用fetch.js
import api from './url'; //引用url.js


export function login(username, password) {
    var qs = require('qs');
    return POST({
        url: api.login,
        method: 'post',
        data: qs.stringify({
            grant_type: 'password',
            client_id: 'eaf76c97-9bc5-450d-ba38-4c8e08c86c23',
            password: password,
            scope: 'recruit',
            username: username,
            client_secret: 'abc123'
        })
    });
};

export function postExcute(parameters){
    return POST_WITH_AUTH({
        url: api.postInfo,
        method: 'post',
        data: parameters
    }, true);
}

export function getExecute(parameters){
    return GET({
        url: api.getInfo,
        method: 'get',
        params: parameters
    })
    
}

