import ApptusService from "../apptus/apptusService";

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
const baseURL = "https://wFE4AE5CF.api.esales.apptus.cloud";
const windowFirst = 1;
const windowLast = 20;
const selectedCategory = "categories_AVONREP_EN-GB:'301'";
const sortBy = "relevance";
const productKey = "3935";
const categoryTree = "categories_AVONREP_EN-GB";
const esalesMarket="AVONREP_EN-GB"
const esalesCustomerKey="029f174e-1e87-4786-805e-30b225bc6932&"
const esalesSessionKey ="d2cab655-faae-458e-bbcd-328e51a0128c&n"
it("Apptus Service with argument", async () => {
  const res = await ApptusService.getProductList(baseURL,windowFirst,windowLast,selectedCategory,sortBy,productKey,categoryTree,esalesMarket,esalesCustomerKey,esalesSessionKey);
  expect(res.data.total).toEqual(data.total);
})

it("Apptus Service without argument", async () => { 
  const res = await ApptusService.getProductList('','','','','','','','','','');
  expect(res.data.total).toEqual(data.total);
})

it("handle exception in Apptus Service", async () => { 
  fetch.mockImplementation(()=> Promise.reject("API failure"));
  const result = await ApptusService.getProductList("a");
  expect(result).toEqual("API failure");
})