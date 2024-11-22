import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from "./pages/homepage/components/JSX Component/Homepage";
import Notfound from "./pages/homepage/components/JSX Component/Notfound";
import Login from "./pages/Login/Components and styles/Login";
import Medicinedetails from "./pages/MedicineTemplate/Components/Medicinedetails";
import Signup from "./pages/Login/Components and styles/Signup";
import Patientdetails from './pages/Login/Components and styles/Patientdetails';
function App() {
  return (
    <div className="homepage">
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/medicines/:name" element={<Medicinedetails />} />
        <Route path='/patientdetails' element={<Patientdetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes> 
    </div>
  );
}

export default App;
