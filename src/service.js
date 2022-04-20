import axios from 'axios';

const baseUrl = 'https://fakestoreapi.com/products';

export  async function getProducts(){
    try{
        const response = await axios.get(baseUrl);
        // console.log(response, 'response from axios call');
        return response;
    }catch(error){
        console.log(error);
    }
  
}
 