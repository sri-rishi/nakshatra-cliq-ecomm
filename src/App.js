import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Cart, HomePage, ProductList, Wishlist } from './pages/index';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
