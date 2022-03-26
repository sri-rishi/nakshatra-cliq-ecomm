import {createContext, useContext, useReducer} from "react";
import { useData } from "./data.context";
import { filterDataReducer } from "../Reducer";
import { getFilterByNewArrivalData, getFilterByPriceRangeData, getSortedProductList, getFilteredByTypeData, getFilteredByBrandData, getFilteredByInterestData, getFilteredByRatingsData, getOutOfStockFilterData, getFilterByFastDeliveryData } from "../Helper";

const FilterDataContext = createContext();

const FilterDataProvider = ({children}) => {
    const {productListData} = useData();

    const [state, dispatch] = useReducer(filterDataReducer, {
        categoryValue: null,
        comingSoon: false,
        sortBy: null,
        filterByType: [],
        filterByBrand: [],
        filterByInterest: [],
        filterByRatings: 1,
        showFastDeliveryProducts: false,
        showOutOfStockProducts: true,
        priceRange: 350000
    });

    const filterByNewArrivalData = getFilterByNewArrivalData(productListData, state.categoryValue);
    const filterByPriceRangeData = getFilterByPriceRangeData(filterByNewArrivalData, state.priceRange);
    const sortedProductList = getSortedProductList(filterByPriceRangeData, state.sortBy);
    const filteredByTypeData = getFilteredByTypeData(sortedProductList, state.filterByType);
    const filteredByBrandData = getFilteredByBrandData(filteredByTypeData, state.filterByBrand);
    const filteredByInterestData = getFilteredByInterestData(filteredByBrandData, state.filterByInterest);
    const filteredByRatingsData = getFilteredByRatingsData(filteredByInterestData, state.filterByRatings);
    const filteredByOutOfStockData = getOutOfStockFilterData(filteredByRatingsData, state.showOutOfStockProducts);
    const filteredByFastDeliveryData = getFilterByFastDeliveryData(filteredByOutOfStockData, state.showFastDeliveryProducts);
    
    return (
        <FilterDataContext.Provider value={{
            filteredByFastDeliveryData,
            priceRange: state.priceRange,
            filterByType: state.filterByType,
            filterByBrand: state.filterByBrand,
            filterByInterest: state.filterByInterest,
            filterByRatings: state.filterByRatings,
            sortBy: state.sortBy, 
            showFastDeliveryProducts: state.showFastDeliveryProducts,
            showOutOfStockProducts: state.showOutOfStockProducts,
            filterDispatch: dispatch}}>
            {children}
        </FilterDataContext.Provider>
    )
}

const useFilteredData = () => useContext(FilterDataContext);

export {useFilteredData, FilterDataProvider};

