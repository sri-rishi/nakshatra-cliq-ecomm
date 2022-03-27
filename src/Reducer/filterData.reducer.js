export const filterDataReducer = (state, action) => {
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
        
        case "FILTER_BY_PRICE_RANGE":
            return {
                ...state,
                priceRange: action.payload
            }

        case "CLEAR_ALL_FILTERS":
            return {
                ...state,
                sortBy: null,
                filterByType: [],
                filterByBrand: [],
                filterByInterest: [],
                filterByRatings: 1,
                showFastDeliveryProducts: false,
                showOutOfStockProducts: true,
                priceRange: 350000
            }
        
        case "BY_NEW_CATEGORY":
            return {
                ...state,
                categoryValue: action.payload
            }

        default:
            return state;
    }
}