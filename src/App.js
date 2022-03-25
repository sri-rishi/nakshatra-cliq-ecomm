import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Cart, HomePage, MockAPI, ProductList, Wishlist, ProductDetails } from './pages/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/productlist/:productId" element={<ProductDetails />} />
        <Route path="/mock-api" element={<MockAPI />} />
       </Routes>
    </div>
  );
}

export default App;
