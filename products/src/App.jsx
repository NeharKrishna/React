import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import CategoryPage from "./CategoryPage";
import ItemCard from "./ItemCard";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
