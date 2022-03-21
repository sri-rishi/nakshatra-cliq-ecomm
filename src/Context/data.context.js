import { createContext, useContext, useEffect, useState } from "react";
import { getProductFromMockServer } from "../data/sever-request";


const DataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getProductFromMockServer(setData);
    },  []);

    console.log(data)
    return (
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export {useData, DataProvider};