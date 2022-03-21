import axios from "axios";

export const getProductFromMockServer = async(setData) => {
    try {
        const response = await axios.get("/api/products");
        setData(response?.data?.products);
    }catch(e) {
        console.error(e);
    }
}