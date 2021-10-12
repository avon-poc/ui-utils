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
const baseURL$1 = "http://localhost:9000";
const categoryURL = "/api/category";
const localeDefault = "en";
const perPageDefault = "50";

//Category service to call the category api


class CategoryService {

  static getCategoryList = async (arg) => {
    const url = baseURL$1 + categoryURL;
    const locale = arg ? arg : localeDefault;
    const perPage = perPageDefault;
    try {
      const result = await fetch(url + '?' + new URLSearchParams({
        perPage: perPage,
        locale: locale
      }));
      const data = await result.json();
      return data;
    } catch (e) {
      return e;
    }
  }

}

var categoryService = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': CategoryService
});

// Category service constant
//localhost:7000/api/v1/en-uk/carts
const baseURL = "http://localhost:7000";
const cartURL = "/api/v1/";
const locale = "en-uk/";
const cart= "carts";
const cartId = "";
const sku = "16912-181";
const quantity = 1;

//localhost:7000/api/v1/en-uk/carts/cf842b85-4d7a-49b3-b7fa-89969b80e069

//Cart service to call the cart api


class CartService {

  static getCart = async (baseurl, localeLan, cartId) => {
    const url = baseurl ? baseurl : baseURL;
    const localeCxt = localeLan ? localeLan : locale;
    const cartID = cartId ? cartId : cartId;
    const urlGetCart = url + cartURL + localeCxt + cart + '/' + cartID;
    try {
      const cartResult = await fetch(urlGetCart);
      const cartdData = await cartResult.json();
      return cartdData;
    } catch (e) {
      return e;
    }

  }

  static addProductToCart = async (baseurl, cartid, lineItemsku, quantitynum, localeLan) => {
    try {
      const url = baseurl ? baseurl : baseURL;
      const localeCxt = localeLan ? localeLan : locale;
      const cartID = cartid ? cartid : cartId;
      const urlforAddProductToCart = url + cartURL + localeCxt + cart;
      const lineitems = lineItemsku ? lineItemsku : sku;
      const quantitycount = quantitynum ? quantitynum : quantity;
      const result = await fetch(urlforAddProductToCart,
        {
          method: 'POST',
          body: JSON.stringify({
            "cartId": cartID,
            "lineItems": {
              "sku": lineitems,
              "quantity": quantitycount
            }
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }
      );
      const data = await result.json();
      return data;
    } catch (e) {
      return e;
    }
  }

}

var cartService = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': CartService
});

exports.CartService = cartService;
exports.CategoryService = categoryService;
exports.isObjectNotEmpty = isObjectNotEmpty;
exports.priceFormatter = priceFormatter$1;
