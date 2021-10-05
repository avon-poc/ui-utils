import CategoryService from "../category/categoryService";

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

it("category Service with argument", async () => { 
  const res = await CategoryService.getCategoryList("en");
  expect(res.data.total).toEqual(data.total);
})

it("category Service without argument", async () => { 
  const res = await CategoryService.getCategoryList( );
  expect(res.data.total).toEqual(data.total);
})

it("handle exception in category Service", async () => { 
  fetch.mockImplementation(()=> Promise.reject("API failure"));
  const result = await CategoryService.getCategoryList("en");
  expect(result).toEqual("API failure");
})