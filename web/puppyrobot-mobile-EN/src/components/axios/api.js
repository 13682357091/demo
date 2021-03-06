import { fetch } from "./fetch"; //引用fetch.js
import api from './url'; //引用url.js

export function orderProduct(name, phone, mail, product_name) {
    return fetch({
        url: api.orderProduct,
        method: 'get',
        params:{
            phone: phone,
            username: name,
            mail: mail,
            product_name: product_name,
            _: Date.parse(new Date())
        }
    })
}

export function validPhone(phone) {
    return fetch({
        url: api.orderProduct,
        method: 'get',
        params:{
            phone: phone,
            q: 's',
            _: Date.parse(new Date())
        }
    })
}

export function getTopNews() {
    return fetch({
        url: api.getNewsInfo,
        method: 'get',
        params:{
            type: 'en',
            is_promote: 1,
            page_size: 3,
            _: Date.parse(new Date())
        }
    })
}

export function getNormalNews(paraPage) {
    return fetch({
        url: api.getNewsInfo,
        method: 'get',
        params:{
            type: 'en',
            is_promote: 0,
            page: paraPage,
            _: Date.parse(new Date())
        }
    })
}

export function getNewsDetail(newsId) {
    return fetch({
        url: api.getNewsInfo,
        method: 'get',
        params:{
            type: 'en',
            nid: newsId,
            _: Date.parse(new Date())
        }
    })
}

export function getInstructionMenuList() {
    return fetch({
        url: api.getInstruction,
        method: 'get',
        params:{
            is_en: 1,
            _: Date.parse(new Date())
        }
    })
}

export function getInstructionContent(nId) {
    return fetch({
        url: api.getInstruction,
        method: 'get',
        params:{
            nid: nId,
            is_en: 1,
            _: Date.parse(new Date())
        }
    })
}

