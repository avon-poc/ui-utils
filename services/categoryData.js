import api from '../api-helper/axiosClient';


 async function categoryData(locale){
      const res = await api.get('http://localhost:9000/api/category?perPage=50&locale=en');
      return await res.json();
      }

// export default categoryData;
module.exports={
      categoryData
}