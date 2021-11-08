import { baseURL, apiVersion, pageName, windowFirst, windowLast, windowFirstRecommendation, selectedCategory, windowLastRecommendation, sortBy, filter,productKey, categoryTree, esalesMarket, esalesCustomerKey, esalesSessionKey } from './apptusConstant'

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
    
    const baseUrl = baseurl ? baseurl : baseURL
    const apiUrl = baseUrl + apiVersion + pageName
    const windowfirst = winfirst ? winfirst : windowFirst
    const windowlast = winlast ? winlast : windowLast
    const wFirstRecommendation = winFirstRecommendation?winFirstRecommendation: windowFirstRecommendation
     const fltr = filtr? filtr: filter
    const wLastRecommendation = winLastRecommendation? winLastRecommendation: windowLastRecommendation
    const selectedcategory = selectcategory ? selectcategory : selectedCategory
    const sortby = sort ? sort : sortBy
    const esalesmarket = esalemarkt ? esalemarkt : esalesMarket
    const esalescustomerkey = esalecustmer ? esalecustmer : esalesCustomerKey
    const esalessessionkey = esalesesionkey ? esalesesionkey : esalesSessionKey
    
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
  }

}

export default ApptusService;