import axios from "axios";

const getProductFromServer = async(setProductListData) => {
    try {
        const response = await axios.get("/api/products");
        setProductListData(response?.data?.products);
    }catch(e) {
        console.error(e);
    }
}

const getTypeCategoriesFromServer = async(setTypeCategories) => {
    try {
        const response = await axios.get("/api/categories");
        console.log(response?.data?.categories)
        setTypeCategories(response?.data?.categories);
    }catch(e) {
        console.error(e)
    }
}

export {getProductFromServer, getTypeCategoriesFromServer}