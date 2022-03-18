import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { BrandNameSection } from "./components/BrandCategory";
import { CategorySection } from "./components/CategorySection";
import { HeroSection } from "./components/HeroSection";
import { InterestCategorySection } from "./components/InterestCategory";
import { NewCategorySection } from "./components/NewCategorySection";

export const HomePage = () => {
    return (
        <div>
            <Navbar />
            <main class="main-div flex-column justify-center">
                <HeroSection />
                <NewCategorySection />
                <CategorySection />
                <BrandNameSection />
                <InterestCategorySection />
            </main>
            <Footer />
        </div>
    )
}