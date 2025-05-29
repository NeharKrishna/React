import {Route, Routes} from 'react-router-dom';
import Navbar from './Components/navbar.jsx';
import DummyDetails from './DummyDetails.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Fakedata" element={<DummyDetails/>} />
      </Routes>
    </div>
  );
}
export default App;