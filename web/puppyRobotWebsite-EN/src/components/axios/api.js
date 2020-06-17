import { fetch } from "./fetch"; //引用fetch.js
import api from './url'; //引用url.js
import qs from 'qs';
import axios from 'axios';

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
            has_total: 1,
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

export function getInstructionMenuListM1(menuId) {
    // console.log(menuId);
    return fetch({
        url: api.getInstructionM1,
        method: 'get',
        params:{
            id: menuId,
            _: Date.parse(new Date())
        }
    })
}

export function getInstructionContentM1(cId) {
    return fetch({
        url: api.getInstructionM1,
        method: 'get',
        params:{
            node_id: cId,
            type: 1,
            _: Date.parse(new Date())
        }
    })
}

export function postQuestionnaire(answeredCollection) {
    return axios.post(
        api.questionnaire,
        qs.stringify(answeredCollection, { arrayFormat: 'indices' })
    )
        .then(response => { //then 请求成功之后进行什么操作
            return(response);//把请求到的数据发到引用请求的地方
          })
          .catch(error => {
            console.log('请求异常信息：'+error);
            return(error);
          });
    
}

export function postClientSubmit(clientinfo) {
    return axios.post(
        api.clientSubmit,
        JSON.stringify(clientinfo),
        {headers: {'Content-Type': 'application/hal+json'}}
    )
        .then(response => { //then 请求成功之后进行什么操作
            return(response);//把请求到的数据发到引用请求的地方
          })
          .catch(error => {
            console.log('请求异常信息：'+error);
            return(error);
          });
    
}

