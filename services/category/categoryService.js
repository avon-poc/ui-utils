//Category service to call the category api
import { baseURL, categoryURL, localeDefault, perPageDefault} from './categoryConstant';


class CategoryService {

  static getCategoryList = async (arg) => {
    const url = baseURL + categoryURL;
    const locale = arg ? arg : localeDefault;
    const perPage = perPageDefault;
    try {
      const result = await fetch(url + '?' + new URLSearchParams({
        perPage: perPage,
        locale: locale
      }));
      const data = await result.json();
      return data;
    } catch (e) {
      return e;
    }
  }

}



export default CategoryService;