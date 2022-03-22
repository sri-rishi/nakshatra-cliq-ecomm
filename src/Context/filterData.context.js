import {createContext, useContext, useReducer} from "react";
import { useData } from "./data.context";

const FilterDataContext = createContext();

const FilterDataProvider = ({children}) => {
    const {productListData} = useData();
    const [state, dispatch] = useReducer(filterDataReducer, {
        sortBy: null,
        filterByType: [],
        filterByBrand: [],
        filterByInterest: [],
        filterByRatings: 1,
        showFastDeliveryProducts: false,
        showOutOfStockProducts: true
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

    const getFilteredByTypeData = (productList, filterByType) => {
        if(filterByType.length > 0) {
            return productList.filter(product => product.categoryName.some(el => filterByType.includes(el)));
        }
        return productList;
    }

    const getFilteredByBrandData = (productList, filterByBrand) => {
        if(filterByBrand.length > 0) {
            return productList.filter(product => filterByBrand.includes(product.brandName));
        }
        return productList;
    }

    const getFilteredByInterestData = (productList, filterByInterest) => {
        if(filterByInterest.length > 0 ) {
            return productList.filter(product => product.interestCategory.some(el => filterByInterest.includes(el)))
        }

        return productList;
    }

    const getFilteredByRatingsData = (productList, filterByRatings) => productList.filter(product => product.ratings >= filterByRatings);

    const getOutOfStockFilterData = (productList, showOutOfStockProducts) => showOutOfStockProducts ? productList : productList.filter(product => product.inStock)

    const getFilterByFastDeliveryData = (productList, showFastDeliveryProducts) => showFastDeliveryProducts ? productList.filter( product => product.fastDelivery) : productList 


    const sortedProductList = getSortedProductList(productListData, state.sortBy);
    const filteredByTypeData = getFilteredByTypeData(sortedProductList, state.filterByType);
    const filteredByBrandData = getFilteredByBrandData(filteredByTypeData, state.filterByBrand);
    const filteredByInterestData = getFilteredByInterestData(filteredByBrandData, state.filterByInterest);
    const filteredByRatingsData = getFilteredByRatingsData(filteredByInterestData, state.filterByRatings);
    const filteredByOutOfStockData = getOutOfStockFilterData(filteredByRatingsData, state.showOutOfStockProducts);
    const filteredByFastDeliveryData = getFilterByFastDeliveryData(filteredByOutOfStockData, state.showFastDeliveryProducts);
    
    return (
        <FilterDataContext.Provider value={{
            filteredByFastDeliveryData,
            filterByType: state.filterByType,
            filterByBrand: state.filterByBrand,
            filterByInterest: state.filterByInterest,
            filterByRatings: state.filterByRatings,
            sortBy: state.sortBy, 
            filterDispatch: dispatch}}>
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

        case "FILTER_BY_BRAND":
            return state.filterByBrand.includes(action.payload) ?
            {
                ...state, 
                filterByBrand: state.filterByBrand.filter(item => item !== action.payload)
            }
            :
            {
                ...state,
                filterByBrand: state.filterByBrand.concat(action.payload)
            }

        case "FILTER_BY_INTEREST":
            return state.filterByInterest.includes(action.payload) ?
            {
                ...state, 
                filterByInterest: state.filterByInterest.filter(item => item !== action.payload)
            }
            :
            {
                ...state,
                filterByInterest: state.filterByInterest.concat(action.payload)
            }

        case "FILTER_BY_RATINGS":
            return {
                ...state,
                filterByRatings: action.payload
            }

        case "FAST_DELIVERY":
            return {
                ...state,
                showFastDeliveryProducts: !state.showFastDeliveryProducts
            }
        
        case "INCLUDE_OUT_OF_STOCK":
            return {
                ...state,
                showOutOfStockProducts: !state.showOutOfStockProducts
            }

        default:
            return state;
    }
}