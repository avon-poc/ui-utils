'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

// Category service constant
const baseURL = "http://localhost:9000";
const categoryURL = "/api/category";

//Category service to call the category api

  
  class CategoryService {
 
    static getCategoryList = async (arg)=>{
      const url = baseURL+categoryURL;
      //http://localhost:9000/api/category/?perPage='50'?locale=${arg}";
      const locale = arg ? arg : 'en';
      const perPage = '50';
      
      try {
        const result = await fetch(url+'?'+ new URLSearchParams({
          perPage:perPage, 
          locale: locale
          }));
        const data = await result.json();
        console.log("resultss::::::::::::::::::::", data);
        return data;
      } catch (e) {
        console.log("error::::::::::::::::::::", e);
        return null;
      }
    }
    
   }

var categoryService = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': CategoryService
});

exports.CategoryService = categoryService;
exports.isObjectNotEmpty = isObjectNotEmpty;
exports.priceFormatter = priceFormatter$1;
