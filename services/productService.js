import api from '../api-helper/axiosClient';

class ProductService {

 static getProductList= async (params)=>{
    try { 
        let response = await api.get('/product',params);
        let data = response.data;
        return data;
    }
    catch(error){
        throw error;
    }
}

}

export default ProductService;