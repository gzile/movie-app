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
  fetchMovies: (page: number, searchText?: string) => void;
  currentPage: number;
  totalResults: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }: any) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [totalResults, setTotalResults] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);


  const fetchMovies = async (page: number, searchText?: string) => {
    try {
      // Change the url based on the search context/ text since is different url
      let url = '';

      if (searchText) {
        url = `https://api.themoviedb.org/3/search/movie?page=${page}&api_key=${movieAPIKey}&query=${searchText}`;
      } else {
        url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${movieAPIKey}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      setMovies(data.results);
      setTotalResults(data.total_results);
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);

    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    // Fetch initial movies with current page / on start is 1
    fetchMovies(currentPage);
  }, [currentPage]);

  const contextValue: MovieContextProps = {
    movies,
    totalResults,
    currentPage,
    fetchMovies,
    setCurrentPage,
    totalPages,
  };

  return <MovieContext.Provider value={contextValue}>{children}</MovieContext.Provider>;
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error('useMovieContext must be within MovieProvider');
  }
  return context;
};
