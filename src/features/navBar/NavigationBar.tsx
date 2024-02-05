import React from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../../contexts/AuthContext ';
import Button from '../ui/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0038d2;
  color: #9e9d9d;
  padding: 1rem;

  div {
    display: flex;
    align-items: center;
  }

  h1 {
    margin: 0;
    color: #c4c6d1;
  }

  button:hover  {
    background-color: #FFF;
    color: #0038d2;
  }
`;

// Nav bar container that holds only the login button depending of the state of the login
// The button is hide in login route 
const NavBar: React.FC = () => {
    const { isLoggedIn, login, logout } = useAuthContext();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleLogin = () => {
        login();
        navigate("/");
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <NavContainer>
            <div>
                <h1>Movie App 2C</h1>
            </div>
            <div>
                {pathname !== '/login' && (
                    <div>
                        {isLoggedIn ? (
                            <Button onClick={handleLogout}>Logout</Button>
                        ) : (
                            <Button onClick={handleLogin}>Login</Button>
                        )}
                    </div>
                )}

            </div>
        </NavContainer>
    );
};

export default NavBar;
