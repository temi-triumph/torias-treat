import axios from "axios";


const SAVE_URL = "http://localhost:5000/product";



/// saving a product 
const save = async (product) => {
    const response = await axios.post(SAVE_URL, product);
    return response.data;
}

const productService = {
    save,

}


export default productService;