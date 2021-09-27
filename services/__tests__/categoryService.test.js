import CategoryService from "../category/categoryService";

const data = {
  limit: 10,
  offset: 0,
  total: 377,
  results: [
    {
      id: '5625a2cb-14f8-431e-aa38-9406d249e3c2',
      key: '855',
      name: [Object],
      slug: [Object],
      children: [Array]
    },
    {
      id: '6c4a2a99-3a9b-4cb8-9b81-916b914274dc',
      key: '832',
      name: [Object],
      slug: [Object],
      children: []
    },
    {
      id: '72269543-b93b-45ad-b052-985e58123e25',
      key: '1308',
      name: [Object],
      slug: [Object],
      children: []
    },
    {
      id: 'ed6c0df5-ab3e-47a0-8027-f341e9801d2d',
      key: '304',
      name: [Object],
      slug: [Object],
      children: []
    },
    {
      id: '36b971d5-eead-4315-865f-5e3c9b8610cd',
      key: '1154',
      name: [Object],
      slug: [Object],
      children: []
    }
  ]
}
global.fetch = jest.fn(()=>
Promise.resolve({
  json: ()=> Promise.resolve({data})
})
);

it("category Service", async () => { 
  const res = await CategoryService.getCategoryList("en");
  expect(res.data.total).toEqual(data.total);
})

it("category Service", async () => { 
  const res = await CategoryService.getCategoryList( );
  expect(res.data.total).toEqual(data.total);
})

it("handle exception in category Service", async () => { 
  fetch.mockImplementation(()=> Promise.reject("API failure"));
  const result = await CategoryService.getCategoryList("en");
  expect(result).toEqual("API failure");
})



