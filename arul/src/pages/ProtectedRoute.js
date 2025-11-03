import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { verifyToken } from '../Auth';

const ProtectedRoute = ({ children }) => {
    
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await verifyToken();
      setIsValid(result.valid);
    };
    checkAuth(); 
  }, []);

  if (isValid === null) return <p>Checking authentication...</p>;

  if (!isValid) return <Navigate to="/Login" replace />;

  return children;
};

export default ProtectedRoute;
