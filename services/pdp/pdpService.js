import { baseURL, productURL, locale, products,  productId } from './pdpConstant';

/**
 * Pdp Service  Class
 * @class pdpService
 */
export class pdpService {

  /**
 * Retrieves product by porduct Id 
 *  @async
 *  @method
 *  @param {String} baseurl - base url
 *  @param {Object} products - product 
 *  @param {String} localeLan - localeLan
 *  @returns {result} result object
 *
 */

  static getProductByID = async (baseurl, product , localeLan) => {
    try {
      const url = baseurl ? baseurl : baseURL
      const localeCxt = localeLan ? localeLan : locale
      const productID = product.productid ? product.productid : productId
      const urlforGetProductByProductId = url + productURL + localeCxt + products + productID
      const result = await fetch(urlforGetProductByProductId,
        {
          method: 'GET',
          mode: 'no-cors',
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

export default pdpService;
