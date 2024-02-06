import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext ';
import Button from '../ui/Button';
import {  useLocation, useNavigate } from 'react-router-dom';
import { NavContainer, Menu, MenuItem, StyledNavLink } from './styled';

// Nav bar container that holds only the login button depending of the state of the login
// The button is hide in login route 
export const NavBar: React.FC = () => {
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
        <NavContainer data-testid='navbar-menu'>
            <h1>Movie App 2C</h1>
            <Menu>
                <MenuItem>
                    <StyledNavLink to="/movies">Movies</StyledNavLink>
                </MenuItem>
                <MenuItem>
                    <StyledNavLink to="/favorites">Favorite movies</StyledNavLink>
                </MenuItem>
                {isLoggedIn && (
                    <MenuItem>
                        <Button onClick={handleLogout}>Logout</Button>
                    </MenuItem>
                )}
                {!isLoggedIn && pathname !== '/login' && (
                    <MenuItem>
                        <Button onClick={handleLogin}>Login</Button>
                    </MenuItem>
                )}
            </Menu>
        </NavContainer>
    );
};

