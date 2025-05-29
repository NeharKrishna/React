import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DummyDetails from './components/recipes/DummyDetails';
import UserDetails from './components/users/UserDetails';
import './App.css';
import ProductDetails from './components/products/ProductDetails';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/recipes" element={<DummyDetails />} />
        <Route path="/users" element={<UserDetails />} />
        <Route path="/products" element={<ProductDetails />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}
export default App;