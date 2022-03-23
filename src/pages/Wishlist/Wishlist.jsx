import { Navbar } from "../../Components/index/index";
import { WishlistitemCard } from "./components/WishlistItemCard";

export const Wishlist = () => {
    return (
        <>
            <Navbar />
            <main className="wishlist-main-box grid gap-3">
                <div className="wish-head">
                    <h2 className="sm-heading">My Wishlist (2 items)</h2>
                </div>
                <div className="wishlist-main flex-row gap-2 justify-center">
                    <WishlistitemCard />
                    <WishlistitemCard />
                </div>
            </main>
        </>
    ) 
}