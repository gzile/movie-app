import React, { createContext, useContext, useEffect, useState } from 'react';

const movieAPIKey = process.env.MOVIES_API_KEY || '59de690a34f0dcf244f337e42afa9ae9'

interface MovieType {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    popularity: number;
}

interface MovieContextProps {
  movies: MovieType[];
  fetchMovies: (page: number) => void;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieProvider: React.FC<{children: React.ReactNode}> = ({ children }: any) => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const fetchMovies = async (page: number) => {
    // Remove this latter!
    console.log("api", movieAPIKey);

    // Replace with axios and adapt for searching
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${movieAPIKey}`);
    const data = await response.json();

    setMovies(data.results);
  };

  useEffect(() => {
    // Fetch initial movies when the component mounts with page number 1
    fetchMovies(1);
  }, []);

  return <MovieContext.Provider value={{ movies, fetchMovies }}>{children}</MovieContext.Provider>;
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
 
  if (!context) {
    throw new Error('useMovieContext must be within MovieProvider');
  }
  return context;
};
