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
            is_promote: 1,
            _: Date.parse(new Date())
        }
    })
}

export function getNormalNews(paraPage) {
    return fetch({
        url: api.getNewsInfo,
        method: 'get',
        params:{
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
            nid: newsId,
            _: Date.parse(new Date())
        }
    })
}

export function getInstructionMenuList(menuId) {
    // console.log(menuId);
    return fetch({
        url: api.getInstruction,
        method: 'get',
        params:{
            id: menuId,
            _: Date.parse(new Date())
        }
    })
}

export function getInstructionContent(cId) {
    return fetch({
        url: api.getInstruction,
        method: 'get',
        params:{
            node_id: cId,
            type: 1,
            _: Date.parse(new Date())
        }
    })
}

