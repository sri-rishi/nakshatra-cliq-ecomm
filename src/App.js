import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Cart, HomePage, MockAPI, ProductList, Wishlist, ProductDetails, PrivateRoute, SignUp, Login } from './pages/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productlist/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mock-api" element={<MockAPI />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user/cart" element={<Cart />} />
          <Route path="/user/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
