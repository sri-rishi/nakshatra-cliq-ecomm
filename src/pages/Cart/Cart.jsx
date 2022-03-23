import { Navbar } from "../../Components/index"
import { HorizontalCard } from "./components/HorizontalCard/HorizontalCard"
import { PriceSummary } from "./components/index"

export const Cart = () => {
    return (
        <>
            <Navbar />
            <main className="cart-main grid gap-1 justify-center">
                <div className="grid">
                    <div className="cart-heading card-shadow">
                        <p className="xsm-heading font-weight-6">My Cart(1 item)</p>
                    </div>
                    <HorizontalCard />
                </div>
                <div className="line"></div>
                <PriceSummary />
            </main>
        </>
    )
}