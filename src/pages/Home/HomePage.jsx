import { BrandNameSection, CategorySection, Footer, HeroSection, InterestCategorySection, Navbar, NewCategorySection } from "./components"


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