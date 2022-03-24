import { Navbar } from "../../Components/index"
import { BrandNameSection, TypeCategorySection, Footer, HeroSection, InterestCategorySection, NewCategorySection } from "./components"


export const HomePage = () => {
    return (
        <div>
            <Navbar />
            <main className="main-div flex-column justify-center">
                <HeroSection />
                <NewCategorySection />
                <TypeCategorySection />
                <BrandNameSection />
                <InterestCategorySection />
            </main>
            <Footer />
        </div>
    )
}