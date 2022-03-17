import './App.css';
import { HeroSection } from './pages/Home/components/HeroSection';
import { Footer, Navbar } from './Components';



function App() {
  return (
    <div className="App">
      <HeroSection />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
