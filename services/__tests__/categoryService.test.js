import CategoryService from "../category/categoryService";
import fetch from 'jest-fetch-mock'


beforeEach(() => {
  fetch.resetMocks();
});

it("category Service", async () => {
  let data = {
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
  fetch.mockResponseOnce(data.total);
  const res = await CategoryService.getCategoryList("en");
  expect(res.total).toEqual(data.total);
});

it("arguments not supplied", async () => {
  let data = {
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
  fetch.mockResponseOnce(data.total);
  const res = await CategoryService.getCategoryList();
  expect(res.total).toEqual(data.total);
});



// it("catches errors and returns null", async () => {
//   fetch.mockReject(() => "API failure");
//   const result = await CategoryService.getCategoryList("en")
//   console.log("result:::::::::::::::::::", result);
//   expect(result).toEqual(null);
//   expect(fetch).toHaveBeenCalledTimes(1);
// });


// it("returns false if no data is returned by the API", async () => {
//   global.fetch = jest.fn(() => {
//      Promise.reject();
//   });
//   const value = await CategoryService.getCategoryList("en")
//   expect(fetch).toHaveBeenCalledTimes(1);
//   expect(value).toBe(false);
// });

// test('async test', async () => {
//   const asyncMock = jest.fn().mockRejectedValue(new Error('Async error'));

//   await asyncMock(); // throws "Async error"
// });

