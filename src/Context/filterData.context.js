import {createContext, useContext} from "react";

const FilterDataContext = createContext();

const FilterDataProvider = ({children}) => {
    return (
        <FilterDataContext.Provider>
            {children}
        </FilterDataContext.Provider>
    )
}

const useFilteredData = () => useContext(FilterDataContext);

export {useFilteredData, FilterDataProvider};