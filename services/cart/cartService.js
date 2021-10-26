
import { baseURL, cartURL, locale, carts, sku, quantity, cartId } from './cartConstant';


export class CartService {

/**
 * Retrieves cart object by cartId.
 * @async
 * @method
 * @param {String} baseURL - base url
 *  @param {String} cartURL - cartURL
 *  @param {String} locale - locale 
 *  @param {String} carts - carts
 *  @param {String} sku - sku
 *  @param {String} quantity - quantity
 * @param {String} cartId - cart Id
 * @returns {cartdData} cartdData object
 */

  static getCart = async (baseurl, localeLan, cart) => {
    const url = baseurl ? baseurl : baseURL
    const localeCxt = localeLan ? localeLan : locale
    const cartID = cart.cartid ? cart.cartid : cartId
    const urlGetCart = url + cartURL + localeCxt + carts + '/' + cartID;
    try {
      const cartResult = await fetch(urlGetCart);
      const cartdData = await cartResult.json();
      return cartdData;
    } catch (e) {
      return e;
    }

  }

  /**
 * Retrieves Add Product To Cart.
 * @async
 * @method
 * @param {String} baseURL - base url
 *  @param {Object} cart - cart
 *  @param {String} lineItemsku - lineItemsku 
 *  @param {Number} quantitynum - quantitynum
 *  @param {String} localeLan - locale
 * @returns {data} data object
 */

  static addProductToCart = async (baseurl, cart, lineItemsku, quantitynum, localeLan) => {
    try {
      const url = baseurl ? baseurl : baseURL
      const localeCxt = localeLan ? localeLan : locale
      const cartID = cart.cartid ? cart.cartid : cartId
      const urlforAddProductToCart = url + cartURL + localeCxt + cart
      const lineitems = lineItemsku ? lineItemsku : sku
      const quantitycount = quantitynum ? quantitynum : quantity
      const result = await fetch(urlforAddProductToCart,
        {
          method: 'POST',
          body: JSON.stringify({
            "cartId": cartID,
            "lineItems": {
              "sku": lineitems,
              "quantity": quantitycount
            }
          }),
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

export default CartService;
