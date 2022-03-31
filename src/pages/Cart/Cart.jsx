import { Navbar } from "../../Components/index"
import { useCart } from "../../Context/cart.context"
import { HorizontalCard } from "./components/HorizontalCard/HorizontalCard"
import { PriceSummary } from "./components/index"

export const Cart = () => {
    const {cart} = useCart();
    return (
        <>
            <Navbar />
            <main className="cart-main grid gap-1 justify-center">
                <div className="grid">
                    <div className="cart-heading card-shadow">
                        <p className="xsm-heading font-weight-6">My Cart({cart.length} item)</p>
                    </div>
                    {
                       cart && cart.map((cartItem)  => (
                        <HorizontalCard key={cartItem._id} cartItem={cartItem}/>
                       ))
                    }
                    
                </div>
                <div className="line"></div>
                <PriceSummary />
            </main>
        </>
    )
}