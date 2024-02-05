import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './features/movies/MovieList';
import Login from './features/login/Login';
import { AuthProvider } from './contexts/AuthContext ';
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './features/navBar/NavigationBar';
import MovieDetails from './features/movies/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MovieProvider>
        <NavBar />
          <Routes>
            <Route path='/movies' index element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetails/>} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
