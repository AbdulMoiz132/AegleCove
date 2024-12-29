import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Medicines from './pages/Medicines.jsx'
import Bmi from './pages/Bmi.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SymptomAnalyzer from './pages/SymptomAnalyzer.jsx'
import Diseases from './pages/Diseases.jsx'
import AboutUs from './pages/AboutUs.jsx'
import MedicineDetails from './pages/MedicineDetails.jsx'
import MedicalRecords from './pages/MedicalRecords.jsx'
import Profile from './pages/Profile.jsx'
import Notfound from './pages/Notfound.jsx'
import FindDoctor from './pages/FindDoctor.jsx'
import FindPharmacy from './pages/FindPharmacy.jsx'
import DiseasesDetails from './pages/DiseasesDetails.jsx'
import ProtectedRoute from './components/ProtectedRoutes.jsx'
import ProtectedRouteforAuthenticatedUser from './components/ProtectedRouteforAuthenticatedUser.jsx'
import OtherSymptomAnalyzer from './pages/OtherSymptomAnalyzer.jsx'
import Help from './pages/Help.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import SearchResults from './pages/SearchResults.jsx'


function App() {
  return (
    <div className="homepage">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<ProtectedRouteforAuthenticatedUser><Login /></ProtectedRouteforAuthenticatedUser>} />
        <Route path="/medicines/:char" element={<Medicines />} />
        <Route path='/bmicalculator' element={<Bmi />} />
        <Route path="/symptomanalyzer" element={<SymptomAnalyzer />} />
        <Route path='/dashboard/my' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/diseases/:char' element={<Diseases />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/medicinesdetails/:id' element={<MedicineDetails />} />
        <Route path='/medicalrecords' element={
          <ProtectedRoute> <MedicalRecords /></ProtectedRoute>} />
        <Route path='/dashboard/symptomanalyzer' element={
          <ProtectedRoute> <OtherSymptomAnalyzer/></ProtectedRoute>} />
        <Route path='/profile' element={
          <ProtectedRoute><Profile /></ProtectedRoute>
        } />
         <Route path='/help' element={
          <ProtectedRoute><Help /></ProtectedRoute>
        } />
        <Route path='/diseasesdetails/:id' element={<DiseasesDetails />} />
        <Route path='/finddoctor' element={<FindDoctor />} />
        <Route path='/findpharmacy' element={<FindPharmacy />} />
        <Route path='/comingsoon' element={<ComingSoon/>} />
        <Route path="/search" element={<SearchResults />} />
        <Route path='*' element={<Notfound />} />
        

      </Routes>
    </div>
  );
}

export default App;
