import { baseURL, categoryURL, localeDefault, perPageDefault} from './categoryConstant';

/**
 * Category Service  Class
 * @class CategoryService
 */

export class CategoryService {

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
    const url = baseURL + categoryURL;
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



export default CategoryService;
