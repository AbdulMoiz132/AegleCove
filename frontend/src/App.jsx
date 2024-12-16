import { Routes, Route, useLocation } from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
// import Notfound from "./pages/homepage/components/JSX Component/Notfound"
import Login from "./pages/Login.jsx"
// import Medicinedetails from "./pages/MedicineTemplate/Components/Medicinedetails";
import Signup from "./pages/Signup.jsx"
import Medicines from './pages/Medicines.jsx'
import Bmi from './components/Bmi.jsx'
import Loader from './components/Loader.jsx'
// import ProtectedRoute from './pages/Routinghandels/ProtectedRoutes'
import Dashboard from './pages/Dashboard.jsx'
import SymptomAnalyzer from './pages/SymptomAnalyzer.jsx'
// import DashCard from './components/DashCard.jsx';
import Diseases from './pages/Diseases.jsx'
import AboutUs from './pages/AboutUs.jsx'

function App() {
  return (
    <div className="homepage">
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/medicines/:char" element={<Medicines />} />
        <Route path="/medicines" element={<Medicines/>} />
        <Route path='/bmicalculator' element={<Bmi/>}/>
        <Route path="/loader" element={<Loader />} />
        <Route path="/symptomanalyzer" element={<SymptomAnalyzer />} />
        {/* <Route path='/dashboard/:username' element={
          <ProtectedRoute>
            <Homepage/>
          </ProtectedRoute> */}

         {/* }></Route> */}
        {/* <Route path="/dashcard" element={<DashCard />} /> */}
        <Route path='/dashboard'element={<Dashboard/>}/>
        <Route path='/diseases'element={<Diseases/>}/>
        <Route path='/aboutus' element={<AboutUs/>} />
      </Routes> 
    </div>
  );
}

export default App;
