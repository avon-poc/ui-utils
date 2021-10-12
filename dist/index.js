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
const baseURL$2 = "http://localhost:9000";
const categoryURL$1 = "/api/category";
const localeDefault = "en";
const perPageDefault = "50";

//Category service to call the category api


class CategoryService {

  static getCategoryList = async (arg, market) => {
    const url = baseURL$2 + categoryURL$1;
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
//localhost:7000/api/v1/en-uk/carts
const baseURL$1 = "http://localhost:7000";
const cartURL = "/api/v1/";
const locale = "en-uk/";
const cartId = "";
const sku = "16912-181";
const quantity = 1;

//localhost:7000/api/v1/en-uk/carts/cf842b85-4d7a-49b3-b7fa-89969b80e069

//Cart service to call the cart api


class CartService {

  static getCart = async (baseurl, localeLan, cart) => {
    const url = baseurl ? baseurl : baseURL$1;
    const localeCxt = localeLan ? localeLan : locale;
    const cartID = cart.cartid ? cart.cartid : cartId;
    const urlGetCart = url + cartURL + localeCxt + cart + '/' + cartID;
    try {
      const cartResult = await fetch(urlGetCart);
      const cartdData = await cartResult.json();
      return cartdData;
    } catch (e) {
      return e;
    }

  }

  static addProductToCart = async (baseurl, cart, lineItemsku, quantitynum, localeLan) => {
    try {
      const url = baseurl ? baseurl : baseURL$1;
      const localeCxt = localeLan ? localeLan : locale;
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

// apptus constant
const baseURL = "https://wFE4AE5CF.api.esales.apptus.cloud";
const categoryURL = "/api/v2";
const pageName ="/panels/product-list-page/";
const windowFirst=1;
const windowLast=20;
const selectedCategory="categories_AVONREP_EN-GB:'301'";
const sortBy="relevance";
const productKey="3935";
const categoryTree="categories_AVONREP_EN-GB";
const esalesMarket="AVONREP_EN-GB";
const esalesCustomerKey="029f174e-1e87-4786-805e-30b225bc6932&";
const esalesSessionKey ="d2cab655-faae-458e-bbcd-328e51a0128c&n";

//apptus service to call the category api


class ApptusService {

  static getMegaMenu = async (baseurl, winfirst, winlast, selectcategory, sort, prodkey,catgtree, esalemarkt, esalecustmer, esalesesionkey ) => {
    const baseUrl =  baseurl? baseurl : baseURL;
    const url = baseUrl + categoryURL+pageName;
    const windowfirst = winfirst ? winfirst : windowFirst;
    const windowlast = winlast ? winlast : windowLast;
    const selectedcategory = selectcategory? selectcategory : selectedCategory;
    const sortby = sort ? sort : sortBy;
    const productkey = prodkey ? prodkey :productKey;
    const categorytree = catgtree ? catgtree : categoryTree;
    const esalesmarket = esalemarkt ? esalemarkt :esalesMarket;
    const esalescustomerkey = esalecustmer ? esalecustmer :esalesCustomerKey;
    const esalessessionkey = esalesesionkey ? esalesesionkey :esalesSessionKey;

   const params = new URLSearchParams({
        window_first: windowfirst,
        window_last: windowlast,
        selected_category: selectedcategory,
        sort_by: sortby,
        product_key: productkey,
        category_tree: categorytree,
        'esales.market': esalesmarket,
        'esales.customerKey': esalescustomerkey,
        'esales.sessionKey': esalessessionkey
       }).toString();
       const parameters = JSON.stringify(params.replace(/%26/g, '&'));
        
    try {
      const result = await fetch(url + '?' + JSON.stringify(parameters));
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
exports.priceFormatter = priceFormatter;
