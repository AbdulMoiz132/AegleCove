import React from 'react'; 
import { Navigate } from 'react-router-dom'; 
import useAuthStore from '../store/Authstore';

const ProtectedRouteforAuthenticatedUser = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  
  if (isAuthenticated) {
    return <Navigate to="/dashboard/my" />;
  }


  return children;
};

export default ProtectedRouteforAuthenticatedUser;
