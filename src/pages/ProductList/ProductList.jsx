import { ProductDataList, SideBar } from "./index";
import { Button, Navbar } from "../../Components/index";


export const ProductList = () => {
    return (
        <div className="productList-temp grid">
            <Navbar />
            <SideBar />
            <ProductDataList />
            <footer className="filter-hidden display-none align-items">
                <Button className="xsm-heading font-weight-5 bg-transparent btn-border-none" text="Filter"/>
            </footer>
        </div>
    )
}