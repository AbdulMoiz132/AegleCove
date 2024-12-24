import React from 'react'; 
import { Navigate } from 'react-router-dom'; 
import useAuthStore from '../../store/Authstore'; 

const ProtectedRoute = ({ children }) => {

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // If the user is not authenticated, redirect them to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the protected content (children)
  return children;
};

export default ProtectedRoute;