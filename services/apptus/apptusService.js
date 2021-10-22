/**
 * Retrieves a user by email.
 * @async
 * @method
 * @param {String} baseurl - base url
 *  @param {Number} winfirst - window first 
 *  @param {Number} winlast - window last
 *  @param {String} selectcategory - selected category 
 *  @param {String} sort - sortBy 
 *  @param {String} prodkey - product key
 *  @param {String} catgtree - category tree
 *  @param {String} esalemarkt - esalemarkt
 * @param {String} esalecustmer - esalecustmer
 * @param {String} esalesesionkey - esalesesionkey
 * @returns {data} data object
 *
 */
import { baseURL, categoryURL, pageName, windowFirst, windowLast, selectedCategory, sortBy, productKey, categoryTree, esalesMarket, esalesCustomerKey, esalesSessionKey } from './apptusConstant'


class ApptusService {

  static getMegaMenu = async (baseurl, winfirst, winlast, selectcategory, sort, prodkey, catgtree, esalemarkt, esalecustmer, esalesesionkey) => {
    const baseUrl = baseurl ? baseurl : baseURL
    const apiUrl = baseUrl + categoryURL + pageName
    const windowfirst = winfirst ? winfirst : windowFirst
    const windowlast = winlast ? winlast : windowLast
    const selectedcategory = selectcategory ? selectcategory : selectedCategory
    const sortby = sort ? sort : sortBy
    const productkey = prodkey ? prodkey : productKey
    const categorytree = catgtree ? catgtree : categoryTree
    const esalesmarket = esalemarkt ? esalemarkt : esalesMarket
    const esalescustomerkey = esalecustmer ? esalecustmer : esalesCustomerKey
    const esalessessionkey = esalesesionkey ? esalesesionkey : esalesSessionKey

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
    }).toString()
    const parameters = JSON.stringify(params.replace(/%26/g, '&'))

    try {
      const result = await fetch(apiUrl + '?' + JSON.stringify(parameters));
      const data = await result.json();
      return data;
    } catch (e) {
      return e;
    }
  }

}

export default ApptusService;