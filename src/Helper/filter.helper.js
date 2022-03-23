const getFilterByPriceRangeData = (productList, priceRange) => {
    return productList.filter(product => product.price.discounted < priceRange);
}

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

const getFilterByFastDeliveryData = (productList, showFastDeliveryProducts) => showFastDeliveryProducts ? productList.filter( product => product.fastDelivery) : productList ;

export {getFilterByPriceRangeData, getSortedProductList, getFilteredByTypeData, getFilteredByBrandData, getFilteredByInterestData, getFilteredByRatingsData, getOutOfStockFilterData, getFilterByFastDeliveryData }