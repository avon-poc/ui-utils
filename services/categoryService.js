import api from '../api-helper/axiosClient';

class CategoryService {

     fetcher =async (url)=>{
        return api.get(url);
     } 
}

export default CategoryService;

