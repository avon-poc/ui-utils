//Cart service to call the cart api
import { BASE_URL, LOCALE, QTY, CART_ID, ENDPOINT } from './cartConstant';
import * as cookie from "cookie";


export class CartService {

  static getCart = async (baseurl, localeLan, cart) => {
    const url = baseurl ? baseurl : BASE_URL
    const localeCxt = localeLan ? localeLan : LOCALE
    const cartID = cart.cartid ? cart.cartid : CART_ID
    const urlGetCart = url + cartURL + localeCxt + cart + '/' + cartID;
    try {
      const cartResult = await fetch(urlGetCart);
      const cartData = await cartResult.json();
      return cartData;
    } catch (e) {
      return e;
    }

  }

  static addProductToCart = async (sku, quantity = QTY, cartId, locale = LOCALE) => {
    try {
      const url = `${BASE_URL}${locale}${ENDPOINT}`;
      const payload = {
        lineItems: {
          sku,
          quantity
        }
      };

      if (cartId)
        payload.cartId = cartId;

      const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });

      const data = await result.json();
      return data;
    } catch (e) {
      return e;
    }
  }

}

export async function addProductToCart(req, res) {
  const { cookies, body } = req
  const { sku, qty } = body
  const { cartId } = cookies;
  let data;
  if (cartId) {
    data = await CartService.addProductToCart(sku, qty, cartId)
  } else {
    data = await CartService.addProductToCart(sku, qty)
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("cartId", data.body.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
      })
    );
  }
  console.log('asdf', data)
  res.statusCode = 200;
  res.send(data)
}

export default CartService;
