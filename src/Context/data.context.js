import { createContext, useContext, useEffect, useState } from "react";
import { getProductFromServer, getTypeCategoriesFromServer } from "../api-calls";


const DataContext = createContext();

const DataProvider = ({children}) => {
    const [productListData, setProductListData] = useState([]);
    const [typeCategoriesData, setTypeCategoriesData] = useState([]);
    
    useEffect(() => {
        getProductFromServer(setProductListData);
        getTypeCategoriesFromServer(setTypeCategoriesData);
    },  []);

    return (
        <DataContext.Provider value={{productListData, typeCategoriesData}}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export {useData, DataProvider};