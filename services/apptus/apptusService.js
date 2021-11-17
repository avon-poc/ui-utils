import {
  BASE_URL,
  PRODUCT_LIST_ENDPOINT,
  WINDOW_FIRST,
  WINDOW_LAST,
  windowFirstRecommendation,
  selectedCategory,
  windowLastRecommendation,
  SORT_BY,
  filter,
  CATEGORY_TREE,
  ROOT_CATEGORY,
  ESALES_MARKET,
  ESALES_CUSTOMER_KEY,
  ESALES_SESSION_KEY,
  NAVIGATION_ENDPOINT
} from './apptusConstant.js'

import fetch from "cross-fetch";

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

    const baseUrl = baseurl ? baseurl : BASE_URL
    const apiUrl = baseUrl + PRODUCT_LIST_ENDPOINT
    const windowfirst = winfirst ? winfirst : WINDOW_FIRST
    const windowlast = winlast ? winlast : WINDOW_LAST
    const wFirstRecommendation = winFirstRecommendation?winFirstRecommendation: windowFirstRecommendation
     const fltr = filtr? filtr: filter
    const wLastRecommendation = winLastRecommendation? winLastRecommendation: windowLastRecommendation
    const selectedcategory = selectcategory ? selectcategory : selectedCategory
    const sortby = sort ? sort : SORT_BY
    const esalesmarket = esalemarkt ? esalemarkt : ESALES_MARKET
    const esalescustomerkey = esalecustmer ? esalecustmer : ESALES_CUSTOMER_KEY
    const esalessessionkey = esalesesionkey ? esalesesionkey : ESALES_SESSION_KEY

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
      }).toString()
    const parameters = params.replace(/%26/g, '&')
    const UrlParameter = parameters.replace(/%3A/g, ':')
    const UrlParameters = UrlParameter.replace(/%27/g, "'")
    try {
      const result = await fetch(apiUrl + '?' + UrlParameters);
      const data = await result.json();
      return data;
    } catch (e) {
      return e;
    }
  };

  /**
   * Retrieves Mega Menu from Apptus Service.
   * @async
   * @method
   * @param {String} category_tree - category tree
   * @param {String} root_category - root category
   * @param {Number} window_first - window first
   * @param {Number} window_last - window last
   * @param {String} sort_by - sortBy
   * @param {String} eSalesMarket - eSales Market
   * @param {String} eSalesCustomerKey - eSales customer key
   * @param {String} eSalesSessionKey - eSales session key
   * @returns {data} data object
   *
   */

  static getNavigation = async ({
    category_tree = CATEGORY_TREE,
    root_category = ROOT_CATEGORY,
    window_first = WINDOW_FIRST,
    window_last = WINDOW_LAST,
    sort_by = SORT_BY,
    eSalesMarket = ESALES_MARKET,
    eSalesCustomerKey = ESALES_CUSTOMER_KEY,
    eSalesSessionKey = ESALES_SESSION_KEY
  } = {}) => {

    const apiUrl = BASE_URL + NAVIGATION_ENDPOINT;

    const params = new URLSearchParams({
      window_first,
      window_last,
      sort_by,
      root_category,
      category_tree,
      'esales.market': eSalesMarket,
      'esales.customerKey': eSalesCustomerKey,
      'esales.sessionKey': eSalesSessionKey,
      'include-empty-categories': false
    });
    /*
    export type Category = {
      id: string - key
      name: string - displayName
      slug: string attributes.url[0]
      children: Category[] - subcategories
    }
    */

    try {
      const res = await fetch(`${apiUrl}?${params}`);
      const data = await res.json();
      const { categoryOverview } = data
      return categoryOverview[0].categoryTree.subcategories
    } catch (e) {
      console.error('ApptusService.getNavigation() error:', e);
      return e;
    }
  }

}

export default ApptusService;
