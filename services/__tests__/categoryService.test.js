import CategoryService from "../categoryService";
import mockAxios from 'axios';

jest.mock('axios');

describe('to test category Service', () => {

it('call axios successfully data from an API', async () => {
  mockAxios.get.mockImplementationOnce(() => 
  Promise.resolve({
    data:{
      results:["category"]
    }
  })
  );
  const res = await CategoryService.getCategoryList('en');
  expect(res).toEqual(["category"])

  });
})
