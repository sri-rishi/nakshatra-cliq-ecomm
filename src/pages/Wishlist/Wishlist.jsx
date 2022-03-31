import { Navbar } from "../../Components/index/index";
import { useWishlist } from "../../Context/wishlist.context";
import { WishlistitemCard } from "./components/WishlistItemCard";

export const Wishlist = () => {
    const {wishlist} = useWishlist();
    return (
        <>
            <Navbar />
            <main className="wishlist-main-box grid gap-3">
                <div className="wish-head">
                    <h2 className="sm-heading">My Wishlist ({wishlist.length} item)</h2>
                </div>
                <div className="wishlist-main flex-row gap-2 justify-center">
                    {
                        wishlist && wishlist.map(wishlistItem => (
                            <WishlistitemCard key={wishlistItem._id} wishlistItem={wishlistItem}/>
                        ))
                    }
                </div>
            </main>
        </>
    ) 
}