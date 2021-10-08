//apptus service to call the category api
import { baseURL, categoryURL,pageName,windowFirst, windowLast, selectedCategory,sortBy,productKey,categoryTree,esalesMarket,esalesCustomerKey,esalesSessionKey} from './apptusConstant'


class ApptusService {

  static getMegaMenu = async () => {
    const url = baseURL + categoryURL+pageName;
   const params = new URLSearchParams({
        window_first: windowFirst,
        window_last: windowLast,
        selected_category: selectedCategory,
        sort_by: sortBy,
        product_key: productKey,
        category_tree: categoryTree,
        'esales.market': esalesMarket,
        'esales.customerKey': esalesCustomerKey,
        'esales.sessionKey': esalesSessionKey
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