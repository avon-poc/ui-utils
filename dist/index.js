'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

const api = axios__default['default'].create({
    baseURL: process.env.BaseUrl,
    headers: {}
});

class ProductService {

 static getProductList= async (params)=>{
    try { 
        let response = await api.get('/product',params);
        let data = response.data;
        return data;
    }
    catch(error){
        throw error;
    }
}

}

var productService = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': ProductService
});

const isParamsNotEmpty = (params) => {
    
    if( ((typeof params === "object" || typeof params === "string" )&& params != null && params.length>0 ) )
    {
        return true;
    }
    else  {
        return false;
    }
    };

var isObjectNotEmpty = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': isParamsNotEmpty
});

const priceFormatter = (n) => {
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return format.format(n);
};

var priceFormatter$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': priceFormatter
});

//import axios from 'axios/index.js';

class CategoryService {

 static getCategoryList= async (params)=>{
    try { 
        let response = await api.get('http://localhost:9000/api/category',{
             params: { 
                perPage:'50', 
                locale: params
           }});
        return await response.data.results;
    }
    catch(error){
        throw error;
    }
}

}

var categoryService = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': CategoryService
});

exports.CategoryService = categoryService;
exports.ProductService = productService;
exports.isObjectNotEmpty = isObjectNotEmpty;
exports.priceFormatter = priceFormatter$1;
