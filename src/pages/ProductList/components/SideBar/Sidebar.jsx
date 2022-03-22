import { Button } from "../../../../Components/index"
import { useFilteredData } from "../../../../Context/filterData.context"
import { brandLogoData, typeCategorySectionItems, interestCoverData, ratingData } from "../../../../data"

export const SideBar = () => {
    const {sortBy, filterDispatch, filterByType, filterByBrand} = useFilteredData();
    return (
        <aside className="aside-box grid">
            <div className="filter-sections filter-head flex-row align-center justify-between">
                <span className="xsm-heading font-weight-5">Filter</span>
                <Button text="Clear All" className="btn-border-none bg-transparent filter-cta-btn font-weight-5" />
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Price Range</span>
                </div>
                <input className="m-vl-1 filter-items" type="range" min="1" max="1000" value="1000" id="myRange" />
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Sort</span>
                </div>
                <ul className="m-vl-1 filter-items">
                    <li className="align-center">
                        <label htmlFor="price-l-to-h">
                            <input 
                            className="filter-inputs" 
                            type="radio" id="price-l-to-h"
                            name="sort" 
                            aria-label="Price Low to High" 
                            onChange={() => filterDispatch({type: "SORT", payload: "PRICE_LOW_TO_HIGH"})} 
                            checked={sortBy === "PRICE_LOW_TO_HIGH"}/>
                            Price - Low to High
                        </label>
                    </li>
                    <li>
                        <label htmlFor="price-h-to-l">
                            <input 
                            className="filter-inputs" 
                            id="price-h-to-l" 
                            type="radio" 
                            name="sort"  
                            aria-label="Price High to Low"
                            onChange={() => filterDispatch({type: "SORT", payload: "PRICE_HIGH_TO_LOW"})} 
                            checked={sortBy === "PRICE_HIGH_TO_LOW"}/>
                            Price - High to Low
                        </label>
                    </li>
                </ul>
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Category</span>
                </div>
                <ul className="m-vl-1 filter-items">
                    {
                        typeCategorySectionItems.map(({id, typeCategoryName}) => (
                            <li key={id}>
                                <label htmlFor={`${typeCategoryName}-camera`}>
                                    <input 
                                    className="filter-inputs" 
                                    id={`${typeCategoryName}-camera`} 
                                    type="checkbox"
                                    name={`${typeCategoryName}-camera`} 
                                    aria-label={`${typeCategoryName} camera type checkbox`} 
                                    onChange={() => (filterDispatch({type: "FILTER_BY_TYPE", payload: typeCategoryName}))}
                                    checked={filterByType.includes(typeCategoryName)}
                                    />
                                    {typeCategoryName}
                                </label>
                            </li>
                        ))
                    }
                </ul>  
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Brands</span>
                </div>
                <ul className="m-vl-1 filter-items">
                    {
                        brandLogoData.map(({id, brandName}) => (
                            <li key={id}>
                                <label htmlFor={`${brandName}-brand`}>
                                    <input 
                                    className="filter-inputs" 
                                    id={`${brandName}-brand`} 
                                    type="checkbox" 
                                    name={`${brandName}-brand`} 
                                    aria-label={`${brandName} Camera Brand checkbox`} 
                                    onChange={() => filterDispatch({type: "FILTER_BY_BRAND", payload: brandName})}
                                    checked={filterByBrand.includes(brandName)}
                                    />
                                    {brandName}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Interest</span>
                </div>
                <ul className="m-vl-1 filter-items">
                    {
                        interestCoverData.map(({id, interestType}) => (
                            <li key={id}>
                                <label htmlFor={`${interestType}-interest`}>
                                    <input 
                                    className="filter-inputs" 
                                    id={`${interestType}-interest`} 
                                    type="checkbox" 
                                    name={`${interestType}-interest`} 
                                    aria-label={`${interestType} Camera checkbox`} 
                                    />
                                    {interestType}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Ratings</span>
                </div>
                <ul className="m-vl-1 filter-items">
                    {
                        ratingData.map(({id, inputValue, ratingValue}) => (
                            <li key={id}>
                                <label htmlFor={`${ratingValue}-interest`}>
                                    <input className="filter-inputs" id={`${ratingValue}-interest`} type="checkbox" name={`${ratingValue}-rating`} aria-label={`${ratingValue} ratings checkbox`} />
                                    {inputValue}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Other</span>
                </div>
                <ul className="m-vl-1 filter-items">
                    <li>
                        <label htmlFor="out-stock">
                            <input className="filter-inputs" id="out-stock" type="checkbox" name="out-stock" aria-label="Include Out of Stock" checked />
                            Include Out of Stock
                        </label>
                    </li>
                    <li>
                        <label htmlFor="fast-delivery">
                            <input className="filter-inputs" id="fast-delivery" type="checkbox" name="fast-delivery" aria-label="Fast Delivery" />
                            Fast Delivery
                        </label>
                    </li>
                </ul>
            </div>
        </aside>
    )
}