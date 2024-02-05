import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext ';

const Login: React.FC = () => {
  const { isLoggedIn, login, logout } = useAuthContext();

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Welcome! You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please login</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default Login;
