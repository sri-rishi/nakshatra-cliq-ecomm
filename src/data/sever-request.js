import axios from "axios";

export const getProductFromMockServer = async(setProductListData) => {
    try {
        const response = await axios.get("/api/products");
        setProductListData(response?.data?.products);
    }catch(e) {
        console.error(e);
    }
}