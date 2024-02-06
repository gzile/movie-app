import React from 'react';
import Button from '../ui/Button';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useAuthContext } from '../../contexts/AuthContext ';
import { useNavigate } from 'react-router-dom';
import { CustomForm, Input, Label, MovieContainer } from '../ui/StyledComponents';

export const Login: React.FC = () => {
  const { login } = useAuthContext();
  const [username, setUsername] = useLocalStorage('username', '');
  const [password, setPassword] = useLocalStorage('password', '');
  const navigate = useNavigate();
  
  // Sets the login status to true. This is just to show the action.
  // Real case will be to get the username and pass and send to the API to authentication
  // Will keep this simple for practical reasons  
  const handleLogin = () => { 
    setPassword(password);
    setUsername(username);
    login();
    navigate('/');
  };

  return (
    <MovieContainer>
      <CustomForm>
        <Label htmlFor="username">Username:</Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleLogin}>Login</Button>
      </CustomForm>
    </MovieContainer>
  );
};
