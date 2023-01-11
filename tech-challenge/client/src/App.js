import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import PhonesListPage from './pages/PhonesListPage';
import PhoneDetails from './components/PhoneDetails';

function App() {
  return (
    <div className="App">      
      <Routes>
        <Route path="/" element={<PhonesListPage />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
      </Routes>      
    </div>
  );
}

export default App;
