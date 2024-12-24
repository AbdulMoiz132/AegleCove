import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Medicines from './pages/Medicines.jsx'
import Bmi from './components/Bmi.jsx'
import Loader from './components/Loader.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SymptomAnalyzer from './pages/SymptomAnalyzer.jsx'
import Diseases from './pages/Diseases.jsx'
import AboutUs from './pages/AboutUs.jsx'
import MedicineDetails from './pages/MedicineDetails.jsx'
import SymptomForm from './components/SymptomForm.jsx'
import MedicalRecordForm from './components/MedicalRecordForm.jsx'
import MedicalRecords from './pages/MedicalRecords.jsx'
import Profile from './pages/Profile.jsx'
import Notfound from './pages/Notfound.jsx'

function App() {
  return (
    <div className="homepage">
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/medicines/:char" element={<Medicines />} />
        <Route path='/bmicalculator' element={<Bmi/>}/>
        <Route path="/loader" element={<Loader />} />
        <Route path="/symptomanalyzer" element={<SymptomAnalyzer />} />
        {/* <Route path='/dashboard/:username' element={
          <ProtectedRoute>
            <Homepage/>
          </ProtectedRoute> */}

         {/* }></Route> */}
        {/* <Route path="/dashcard" element={<DashCard />} /> */}
        <Route path='/dashboard/my'element={<Dashboard/>}/>
        <Route path='/diseases/:char'element={<Diseases/>}/>
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='medicinesdetails/:name' element={<MedicineDetails/>}/>
        <Route path='/symptomform' element={<SymptomForm/>}/>
        <Route path='/medicalrecordform' element={<MedicalRecordForm/>}/>
        <Route path='/medicalrecords' element={<MedicalRecords/>}/> 
        <Route path='/profile' element={<Profile />}/>
        <Route path ='*' element={<Notfound/>}/>

      </Routes> 
    </div>
  );
}

export default App;
