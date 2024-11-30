import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from "./pages/homepage/components/JSX Component/Homepage";
import Notfound from "./pages/homepage/components/JSX Component/Notfound";
import Login from "./pages/Login/Components and styles/Login";
// import Medicinedetails from "./pages/MedicineTemplate/Components/Medicinedetails";
import Signup from "./pages/Login/Components and styles/Signup";
import Medicines from './pages/MedicineTemplate/Components/Medicines';
import Bmi from './pages/BMI_CALC/Components/Bmi';
import Loader from './pages/loader/Loader';
function App() {
  return (
    <div className="homepage">
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/medicines/:char" element={<Medicines />} />
        <Route path="/medicines" element={<Medicines/>} />
        <Route path='/bmicalculator' element={<Bmi/>}/>
        <Route path="/loader" element={<Loader />} />
        <Route path="*" element={<Notfound />} />
      </Routes> 
    </div>
  );
}

export default App;
