import { Footer } from "../../Components/Footer/Footer"
import { Navbar } from "../../Components/Navbar/Navbar"
import { CategorySection } from "./components/CategorySection"
import { HeroSection } from "./components/HeroSection"
import { NewArrivalSection } from "./components/NewArrivalSection"

export const HomePage = () => {
    return (
        <div>
            <Navbar />
            <main class="main-div flex-column justify-center">
                <HeroSection />
                <NewArrivalSection />
                <CategorySection />
                <Footer />
            </main>
        </div>
    )
}