import {Apptus_NavigationBar_Service } from './apptusNavigationBarConstant'

/**
 * Apptus Service class
 * @class ApptusNavigationBarService
 */

class ApptusNavigationBarService {

/**
 * Retrieves Mega Menu from Apptus Service.
 * @async
 * @method
 * @param {Object} apptusParams - apptus Params
 * @returns {data} data object
 *
 */

//https://wFE4AE5CF.api.esales.apptus.cloud/api/v2/panels/navigation-page?window_first=1&window_last=20&selected_category=categories_AVONREP_EN-GB:%27301%27&sort_by=relevance&product_key=3935&category_tree=categories_AVONREP_EN-GB&esales.market=AVONREP_EN-GB&esales.customerKey=029f174e-1e87-4786-805e-30b225bc6932&&esales.sessionKey=d2cab655-faae-458e-bbcd-328e51a0128c&

  static getNavigationItemList = async (apptusParams) => {
    
    const baseUrl = apptusParams.baseurl ? apptusParams.baseurl : Apptus_NavigationBar_Service.baseURL
    const apiUrl = baseUrl + Apptus_NavigationBar_Service.apiVersion + Apptus_NavigationBar_Service.pageName
    const windowfirst = apptusParams.winfirst ? apptusParams.winfirst : Apptus_NavigationBar_Service.windowFirst
    const windowlast = apptusParams.winlast ? apptusParams.winlast : Apptus_NavigationBar_Service.windowLast
    const selectedcategory = apptusParams.selectcategory ? apptusParams.selectcategory : Apptus_NavigationBar_Service.selectedCategory
    const sortby = apptusParams.sort ? apptusParams.sort : Apptus_NavigationBar_Service.sortBy
    const productkey = apptusParams.prodKey ? apptusParams.prodKey : Apptus_NavigationBar_Service.productKey
    const catTree = apptusParams.categTree ? apptusParams.categTree : Apptus_NavigationBar_Service.categoryTree
    const esalesmarket = apptusParams.esalemarkt ? apptusParams.esalemarkt : Apptus_NavigationBar_Service.esalesMarket
    const esalescustomerkey = apptusParams.esalecustmer ? apptusParams.esalecustmer : Apptus_NavigationBar_Service.esalesCustomerKey
    const esalessessionkey = apptusParams.esalesesionkey ? apptusParams.esalesesionkey : Apptus_NavigationBar_Service.esalesSessionKey
    
    const params = new URLSearchParams({
      "window_first" : windowfirst,
      "window_last" : windowlast,
       selected_category : selectedcategory,
       sort_by : sortby,
       product_key : productkey,
       category_tree : catTree,
      'esales.market': esalesmarket,
      'esales.customerKey': esalescustomerkey,
      'esales.sessionKey': esalessessionkey
      
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

export default ApptusNavigationBarService;