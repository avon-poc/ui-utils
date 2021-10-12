//Cart service to call the cart api
import { baseURL, cartURL, locale, cart, sku, quantity, cartId } from './cartConstant';


class CartService {

  static getCart = async (baseurl, localeLan, cart) => {
    const url = baseurl ? baseurl : baseURL
    const localeCxt = localeLan ? localeLan : locale
    const cartID = cart.cartid ? cart.cartid : cartId
    const urlGetCart = url + cartURL + localeCxt + cart + '/' + cartID;
    try {
      const cartResult = await fetch(urlGetCart);
      const cartdData = await cartResult.json();
      return cartdData;
    } catch (e) {
      return e;
    }

  }

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