import { useEffect } from "react"
import { getCartItemsFromServer } from "../../api-calls"
import { Navbar } from "../../Components/index"
import { useCart } from "../../Context/cart.context"
import { HorizontalCard } from "./components/HorizontalCard/HorizontalCard"
import { PriceSummary } from "./components/index"

export const Cart = () => {
    const {cart, cartDispatch} = useCart();

    useEffect(() => {
        getCartItemsFromServer(cartDispatch);
    }, []); 

    if(cart) {
        console.log(cart);
    }

    return (
        <>
            <Navbar />
            <main className="cart-main grid gap-1 justify-center">
                <div className="grid">
                    <div className="cart-heading card-shadow">
                        <p className="xsm-heading font-weight-6">My Cart(1 item)</p>
                    </div>
                    {
                       cart && cart.map((cartItem)  => (
                        <HorizontalCard key={cartItem.id} cartItem={cartItem}/>
                       ))
                    }
                    
                </div>
                <div className="line"></div>
                <PriceSummary />
            </main>
        </>
    )
}