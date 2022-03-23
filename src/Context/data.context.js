import { createContext, useContext, useEffect, useState } from "react";
import { getProductFromMockServer } from "../data/sever-request";


const DataContext = createContext();

const DataProvider = ({children}) => {
    const [productListData, setProductListData] = useState([]);
    useEffect(() => {
        getProductFromMockServer(setProductListData);
    },  []);

    console.log(productListData);
    return (
        <DataContext.Provider value={{productListData}}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export {useData, DataProvider};