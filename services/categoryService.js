import api from '../api-helper/axiosClient';
//import axios from 'axios/index.js';

class CategoryService {

 static getCategoryList= async (params)=>{
    try { 
        let response = await api.get('http://localhost:9000/api/category',{
             params: { 
                perPage:'50', 
                locale: params
           }});
        return await response.data.results;
    }
    catch(error){
        throw error;
    }
}

}

export default CategoryService;