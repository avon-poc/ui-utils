//apptus service to call the category api
import { baseURL, categoryURL,pageName,windowFirst, windowLast, selectedCategory,sortBy,productKey,categoryTree,esalesMarket,esalesCustomerKey,esalesSessionKey} from './apptusConstant'


class ApptusService {

  static getMegaMenu = async (baseurl, winfirst, winlast, selectcategory, sort, prodkey,catgtree, esalemarkt, esalecustmer, esalesesionkey ) => {
    const baseUrl =  baseurl? baseurl : baseURL
    const url = baseUrl + categoryURL+pageName
    const windowfirst = winfirst ? winfirst : windowFirst
    const windowlast = winlast ? winlast : windowLast
    const selectedcategory = selectcategory? selectcategory : selectedCategory
    const sortby = sort ? sort : sortBy
    const productkey = prodkey ? prodkey :productKey
    const categorytree = catgtree ? catgtree : categoryTree
    const esalesmarket = esalemarkt ? esalemarkt :esalesMarket
    const esalescustomerkey = esalecustmer ? esalecustmer :esalesCustomerKey
    const esalessessionkey = esalesesionkey ? esalesesionkey :esalesSessionKey

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
      const result = await fetch(url + '?' + JSON.stringify(parameters));
      const data = await result.json();
      return data;
    } catch (e) {
      return e;
    }
  }

}

export default ApptusService;