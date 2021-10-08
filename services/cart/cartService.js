//Cart service to call the cart api
import { baseURL, cartURL, locale, cart, sku, quantity, cartId } from './cartConstant';


export class CartService {

  static getCart = async (baseurl, localeLan, cartId) => {
    const url = baseurl ? baseurl : baseURL
    const localeCxt = localeLan ? localeLan : locale
    const cartID = cartId ? cartId : cartId
    const urlGetCart = url + cartURL + localeCxt + cart + '/' + cartID;
    try {
      const cartResult = await fetch(urlGetCart);
      const cartdData = await cartResult.json();
      return cartdData;
    } catch (e) {
      return e;
    }

  }

  static addProductToCart = async (baseurl, cartid, lineItemsku, quantitynum, localeLan) => {
    try {
      const url = baseurl ? baseurl : baseURL
      const localeCxt = localeLan ? localeLan : locale
      const cartID = cartid ? cartid : cartId
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
