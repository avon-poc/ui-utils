import axios from 'axios';

class CategoryService {

 static getCategoryList = async (params)=>{
      let response = await axios.get('http://localhost:9000/api/category',{
             params: { 
                perPage:'50', 
                locale: params
           }});
        return await response.data.results;  
}

}

export default CategoryService;