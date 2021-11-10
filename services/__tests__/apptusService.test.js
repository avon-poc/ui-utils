import ApptusService from "../apptus/apptusService";
import fetch from 'cross-fetch'

const data = {
  total: 377,
  results: [
    {
      id: '5625a2cb-14f8-431e-aa38-9406d249e3c2',
      key: '855',
      name: [],
      slug: [],
      children: []
    }
  ]
};

const baseURL = "https://wFE4AE5CF.api.esales.apptus.cloud";
const windowFirst = 1;
const windowLast = 20;
const selectedCategory = "categories_AVONREP_EN-GB:'301'";
const sortBy = "relevance";
const productKey = "3935";
const categoryTree = "categories_AVONREP_EN-GB";
const esalesMarket="AVONREP_EN-GB";
const esalesCustomerKey="029f174e-1e87-4786-805e-30b225bc6932&";
const esalesSessionKey ="d2cab655-faae-458e-bbcd-328e51a0128c&n";

global.console = { error: jest.fn() };
jest.mock('cross-fetch', () => jest.fn());

beforeEach(() => {
  fetch.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({data})
      })
  )
})

describe('Apptus Service', () => {

  describe('getProductList', () => {
    it("with argument", async () => {
      const res = await ApptusService.getProductList(baseURL,windowFirst,windowLast,selectedCategory,sortBy,productKey,categoryTree,esalesMarket,esalesCustomerKey,esalesSessionKey);
      expect(res.data.total).toEqual(data.total);
    })

    it("without argument", async () => {
      const res = await ApptusService.getProductList('','','','','','','','','','');
      expect(res.data.total).toEqual(data.total);
    })
    it("handle exception", async () => {
      fetch.mockImplementation(() => Promise.reject("API failure"))
      const result = await ApptusService.getProductList('a');
      expect(result).toEqual("API failure");
    })
  })

  describe('getNavigation', () => {
    it("with argument", async () => {
      const ROOT_CATEGORY = 'test'
      await ApptusService.getNavigation({
        root_category: ROOT_CATEGORY
      });
      expect(fetch).toHaveBeenCalledWith('https://wFE4AE5CF.api.esales.apptus.cloud/api/v2/panels/navigation-page?window_first=1&window_last=20&sort_by=relevance&root_category=test&category_tree=categories_AVONREP_EN-GB&esales.market=AVONREP_EN-GB&esales.customerKey=029f174e-1e87-4786-805e-30b225bc6932&esales.sessionKey=d2cab655-faae-458e-bbcd-328e51a0128c&include-empty-categories=false');
    })

    it("without argument", async () => {
      const res = await ApptusService.getNavigation();
      expect(res.data.total).toEqual(data.total);
    })
    it("handle exception", async () => {
      fetch.mockImplementation(() => Promise.reject("API failure"))
      await ApptusService.getNavigation();
      expect(console.error).toHaveBeenCalledWith('ApptusService.getNavigation() error:', 'API failure')
    })
  })

})
