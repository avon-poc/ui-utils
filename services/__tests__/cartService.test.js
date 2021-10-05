import CartService from "../cart/cartService";

const data = {
  total: 377,
  results: [
    {
      id: '5625a2cb-14f8-431e-aa38-9406d249e3c2',
      key: '855',
      name: [Object],
      slug: [Object],
      children: [Array]
    }
    
  ]
}
global.fetch = jest.fn(()=>
Promise.resolve({
  json: ()=> Promise.resolve({data})
})
);

const baseURL = "http://localhost:7000";
const cartID = "1b50815f-5e5f-4de1-88ba-a3ef4a8a5040"
const sku = "16912-181";
const quantity = 1;
const locale = "en-uk/";

it("cart Service with argument", async () => { 
  const res = await CartService.getCart(baseURL, locale, cartID);
  expect(res.data.total).toEqual(data.total);
})

it("cart Service without argument", async () => { 
  const res = await CartService.getCart('','','');
  expect(res.data.total).toEqual(data.total);
})

it("add product to cart with argument", async () => { 
  const response = await CartService.addProductToCart(baseURL, cartID, sku, quantity, locale);
  expect(response.data.total).toEqual(data.total);
})

it("add product to cart without argument", async () => { 
   const response = await CartService.addProductToCart('', '', '', '', '');
   expect(response.data.total).toEqual(data.total);
 })

it("handle exception in add Product To cart Service", async () => { 
  fetch.mockImplementation(()=> Promise.reject("Add Product to Cart failure"));
  const result = await CartService.addProductToCart(baseURL, cartID, sku, quantity, locale);
  expect(result).toEqual("Add Product to Cart failure");
})

it("handle exception in get Cart Service", async () => { 
  fetch.mockImplementation(()=> Promise.reject("Get Cart failure"));
  const result = await CartService.getCart(baseURL, locale, cartID);
  expect(result).toEqual("Get Cart failure");
})







