import {Apptus_Product_Service } from './apptusProductListConstant'

/**
 * Apptus Service class
 * @class ApptusProductListService
 */

class ApptusProductListService {

/**
 * Retrieves Mega Menu from Apptus Service.
 * @async
 * @method
 * @param {Object} apptusParams - apptus Params
 * @returns {data} data object
 *
 */

  static getProductList = async (apptusParams) => {
    
    const baseUrl = apptusParams.baseurl ? apptusParams.baseurl : Apptus_Product_Service.baseURL
    const apiUrl = baseUrl + Apptus_Product_Service.apiVersion + Apptus_Product_Service.pageName
    const windowfirst = apptusParams.winfirst ? apptusParams.winfirst : Apptus_Product_Service.windowFirst
    const windowlast = apptusParams.winlast ? apptusParams.winlast : Apptus_Product_Service.windowLast
    const wFirstRecommendation = apptusParams.winFirstRecommendation ? apptusParams.winFirstRecommendation : Apptus_Product_Service.windowFirstRecommendation
     const fltr = apptusParams.filtr ? apptusParams.filtr: Apptus_Product_Service.filter
    const wLastRecommendation = apptusParams.winLastRecommendation ? apptusParams.winLastRecommendation: Apptus_Product_Service.windowLastRecommendation
    const selectedcategory = apptusParams.selectcategory ? apptusParams.selectcategory : Apptus_Product_Service.selectedCategory
    const sortby = apptusParams.sort ? apptusParams.sort : Apptus_Product_Service.sortBy
    const esalesmarket = apptusParams.esalemarkt ? apptusParams.esalemarkt : Apptus_Product_Service.esalesMarket
    const esalescustomerkey = apptusParams.esalecustmer ? apptusParams.esalecustmer : Apptus_Product_Service.esalesCustomerKey
    const esalessessionkey = apptusParams.esalesesionkey ? apptusParams.esalesesionkey : Apptus_Product_Service.esalesSessionKey
    
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

export default ApptusProductListService;