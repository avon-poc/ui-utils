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

const priceFormatter = (n) => {
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return format.format(n);
};

// Category service constant
const baseURL$3 = "http://localhost:9000";
const categoryURL = "/api/category";
const localeDefault = "en";
const perPageDefault = "50";

/**
 * Category Service  Class
 * @class CategoryService
 */

class CategoryService {

  /**
 * Retrieves category List.
 * @async
 * @method
 * @param {String} baseURL - base url
 *  @param {String} categoryURL - categoryURL
 *  @param {String} arg - arg
 *  @param {String} locale - locale 
 * @returns {Object} data object
 */

  static getCategoryList = async (arg, market) => {
    const url = baseURL$3 + categoryURL;
    const locale = arg ? arg : localeDefault;
    const perPage = perPageDefault;
    try {
      const result = await fetch(url + '?' + new URLSearchParams({
        perPage: perPage,
        locale: locale,
        market
      }));
      const data = await result.json();
      return data;
    } catch (e) {
      return e;
    }
  }

}

// Category service constant

const baseURL$2 = "http://localhost:7000";
const cartURL = "/api/v1/";
const locale$1 = "en-uk/";
const carts= "carts";
const cartId = "";
const sku = "16912-181";
const quantity = 1;

/**
 * Cart Service  Class
 * @class CartService
 */


class CartService {

/**
 * Retrieves cart object by cartId.
 * @async
 * @method
 * @param {String} baseURL - base url
 *  @param {String} cartURL - cartURL
 *  @param {String} locale - locale 
 *  @param {String} carts - carts
 *  @param {String} sku - sku
 *  @param {String} quantity - quantity
 * @param {String} cartId - cart Id
 * @returns {cartdData} cartdData object
 */

  static getCart = async (baseurl, localeLan, cart) => {
    const url = baseurl ? baseurl : baseURL$2;
    const localeCxt = localeLan ? localeLan : locale$1;
    const cartID = cart.cartid ? cart.cartid : cartId;
    const urlGetCart = url + cartURL + localeCxt + carts + '/' + cartID;
    try {
      const cartResult = await fetch(urlGetCart);
      const cartdData = await cartResult.json();
      return cartdData;
    } catch (e) {
      return e;
    }

  }

  /**
 * Retrieves Add Product To Cart.
 * @async
 * @method
 * @param {String} baseURL - base url
 *  @param {Object} cart - cart
 *  @param {String} lineItemsku - lineItemsku 
 *  @param {Number} quantitynum - quantitynum
 *  @param {String} localeLan - locale
 * @returns {Object} data object
 */

  static addProductToCart = async (baseurl, cart, lineItemsku, quantitynum, localeLan) => {
    try {
      const url = baseurl ? baseurl : baseURL$2;
      const localeCxt = localeLan ? localeLan : locale$1;
      const cartID = cart.cartid ? cart.cartid : cartId;
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

//constant for apptus Service

const baseURL$1 = "https://wFE4AE5CF.api.esales.apptus.cloud";
const apiVersion = "/api/v2";
const pageName ="/panels/product-list-page/";
const windowFirst=1;
const windowLast=20;
const windowFirstRecommendation=1;
const windowLastRecommendation=5;
const selectedCategory="categories_AVONREP_EN-GB:'301'";
const sortBy="relevance";
const filter="market:'UK'";
const esalesMarket="AVONREP_EN-GB";
const esalesCustomerKey="029f174e-1e87-4786-805e-30b225bc6932&";
const esalesSessionKey ="d2cab655-faae-458e-bbcd-328e51a0128c&n";

//https://wFE4AE5CF.api.esales.apptus.cloud/api/v2/panels/product-list-page?esales.market=AVONREP_EN-GB&esales.customerKey=029f174e-1e87-4786-805e-30b225bc6932&&esales.sessionKey=d2cab655-faae-458e-bbcd-328e51a0128c&n&window_first=1&window_last=20&selected_category=categories_AVONREP_EN-GB:'301'&filter=market:’UK’&sort_by=relevance&window_first_recommendations=1&window_last_recommendations=5

//https://wfe4ae5cf.api.esales.apptus.cloud/api/v2/panels/product-list-page/?window_first=1&window_last=20&selected_category=categories_AVONREP_EN-GB:%27301%27&sort_by=market:%27UK%27&product_key=relevance&category_tree=1&esales.market=5&esales.customerKey=AVONREP_EN-GB&esales.sessionKey=029f174e-1e87-4786-805e-30b225bc6932&

/**
 * Apptus Service class
 * @class ApptusService
 */

class ApptusService {

/**
 * Retrieves Mega Menu from Apptus Service.
 * @async
 * @method
 * @param {String} baseurl - base url
 *  @param {Number} winfirst - window first 
 *  @param {Number} winlast - window last
 *  @param {String} selectcategory - selected category 
 *  @param {String} sort - sortBy 
 * @param  {String} filtr - filter 
 *  @param {Number} winFirstRecommendation - window First Recommendation 
 *  @param {Number} winLastRecommendation - window Last Recommendation
 *  @param {String} prodkey - product key
 *  @param {String} catgtree - category tree
 *  @param {String} esalemarkt - esalemarkt
 * @param {String} esalecustmer - esalecustmer
 * @param {String} esalesesionkey - esalesesionkey
 * @returns {data} data object
 *
 */

  static getProductList = async (baseurl, winfirst, winlast, selectcategory, filtr, sort, winFirstRecommendation, winLastRecommendation , esalemarkt, esalecustmer, esalesesionkey) => {
    
    const baseUrl = baseurl ? baseurl : baseURL$1;
    const apiUrl = baseUrl + apiVersion + pageName;
    const windowfirst = winfirst ? winfirst : windowFirst;
    const windowlast = winlast ? winlast : windowLast;
    const wFirstRecommendation = winFirstRecommendation?winFirstRecommendation: windowFirstRecommendation;
     const fltr = filtr? filtr: filter;
    const wLastRecommendation = winLastRecommendation? winLastRecommendation: windowLastRecommendation;
    const selectedcategory = selectcategory ? selectcategory : selectedCategory;
    const sortby = sort ? sort : sortBy;
    const esalesmarket = esalemarkt ? esalemarkt : esalesMarket;
    const esalescustomerkey = esalecustmer ? esalecustmer : esalesCustomerKey;
    const esalessessionkey = esalesesionkey ? esalesesionkey : esalesSessionKey;
    
    const params = new URLSearchParams({
      'esales.market': esalesmarket,
      'esales.customerKey': esalescustomerkey,
      'esales.sessionKey': esalessessionkey,
      "window_first": windowfirst,
      "window_last": windowlast,
      selected_category: selectedcategory,
      filter: fltr,
      sort_by: sortby,
      'window_first_recommendations': wFirstRecommendation,
      'window_last_recommendations': wLastRecommendation
      }).toString();
    const parameters = params.replace(/%26/g, '&');
    const UrlParameter = parameters.replace(/%3A/g, ':');
    const UrlParameters = UrlParameter.replace(/%27/g, "'");
    try {
      const result = await fetch(apiUrl + '?' + UrlParameters);
      const data = await result.json();
      return data;
    } catch (e) {
      return e;
    }
  }

}

/** @constant
    @type {string}
*/
const baseURL = "http://localhost:7000";
const productURL = "/api/v1/";
const locale = "en-uk/";
const products= "products/";
const productId = "";

/**
 * Pdp Service  Class
 * @class pdpService
 */
class pdpService {

  /**
 * Retrieves product by porduct Id 
 *  @async
 *  @method
 *  @param {String} baseurl - base url
 *  @param {Object} products - product 
 *  @param {String} localeLan - localeLan
 *  @returns {result} result object
 *
 */

  static getProductByID = async (baseurl, product , localeLan) => {
    try {
      const url = baseurl ? baseurl : baseURL;
      const localeCxt = localeLan ? localeLan : locale;
      const productID = product.productid ? product.productid : productId;
      const urlforGetProductByProductId = url + productURL + localeCxt + products + productID;
      const result = await fetch(urlforGetProductByProductId,
        {
          method: 'GET',
          mode: 'no-cors',
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

exports.ApptusService = ApptusService;
exports.CartService = CartService;
exports.CategoryService = CategoryService;
exports.isParamsNotEmpty = isParamsNotEmpty;
exports.pdpService = pdpService;
exports.priceFormatter = priceFormatter;
