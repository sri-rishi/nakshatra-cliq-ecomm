import { ProductDataList, SideBar } from "./index";
import {Navbar} from "../../Components/Navbar/Navbar";
import { Button } from "../../Components/Buttons/Button";

export const ProductList = () => {
    return (
        <div className="productList-temp grid">
                <Navbar />
                <SideBar />
                <ProductDataList />
        <footer class="filter-hidden display-none align-items">
            <Button className="xsm-heading font-weight-5 bg-transparent btn-border-none" text="Filter"/>
        </footer>
    </div>
    )
}