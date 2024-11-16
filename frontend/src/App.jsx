import { useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";
import Homepage from "./pages/homepage/components/JSX Component/Homepage";
import Card from "./pages/homepage/components/JSX Component/Card";
import Notfound from "./pages/homepage/components/JSX Component/Notfound";
import { useParams } from "react-router-dom";
import LoginForm1 from "./pages/Login/Components and styles/LoginForm1";
import Login from "./pages/Login/Components and styles/Login";


function App() {
  const location = useLocation();
  const validPaths = ["/", "/Feedback/:head"];
  const parms = useParams
  const isValidPath = validPaths.includes(location.pathname);
  return (
    <div className="homepage">
     
     
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/feedback" element={<Card description= {parms.head} />} />
        <Route path="/signup" element={<LoginForm1/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
       
    </div>
  );
}

export default App;
