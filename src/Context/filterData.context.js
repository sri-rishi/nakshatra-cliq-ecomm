import {createContext, useContext, useReducer} from "react";
import { useData } from "./data.context";

const FilterDataContext = createContext();

const FilterDataProvider = ({children}) => {
    const {productListData} = useData();
    const [state, dispatch] = useReducer(filterDataReducer, {
        sortBy: null,
        filterByType: []
    });

    const getSortedProductList = (productList, sortBy) => {
        if (sortBy === null) {
            return productList
        }
        
        if (sortBy === "PRICE_LOW_TO_HIGH") {
           return [...productList].sort((firstItem, secondItem) => firstItem.price.discounted - secondItem.price.discounted);
        }

        if(sortBy === "PRICE_HIGH_TO_LOW") {
            return [...productList].sort((firstItem, secondItem) => secondItem.price.discounted - firstItem.price.discounted)
        }
    } 

    const getFilterdByTypeData = (productList, filterByType) => {
        if(filterByType.length > 0) {
            return productList.filter(product => product.categoryName.some(el => filterByType.includes(el)));
        }
        return productList;
    }

    const sortedProductList = getSortedProductList(productListData, state.sortBy);
    const filteredByTypeData = getFilterdByTypeData(sortedProductList, state.filterByType);

    return (
        <FilterDataContext.Provider value={{filteredByTypeData,filterByType: state.filterByType, sortBy: state.sortBy, filterDispatch: dispatch}}>
            {children}
        </FilterDataContext.Provider>
    )
}

const useFilteredData = () => useContext(FilterDataContext);

export {useFilteredData, FilterDataProvider};

const filterDataReducer = (state, action) => {
    switch(action.type) {
        case "SORT":
            return {
                ...state,
                sortBy: action.payload
            }

        case "FILTER_BY_TYPE":
            return state.filterByType.includes(action.payload) ? 
            {
                ...state,
                filterByType: state.filterByType.filter(item => item !== action.payload)
            }
            :
            {
                ...state, 
                filterByType: state.filterByType.concat(action.payload)
            }
    }
}