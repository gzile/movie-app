import React, { useState } from 'react';
import { useMovieContext } from '../../contexts/MovieContext';
import { MovieCard } from './MovieCard';
import { SearchBar } from './SearchBar';
import Button from '../ui/Button';
import StyledLink from '../ui/StyledLink';
import { MovieListContainer, PaginationContainer } from '../ui/StyledComponents';

export const MovieList: React.FC = () => {
  const { movies, setCurrentPage, currentPage, fetchMovies } = useMovieContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    fetchMovies(newPage, searchTerm);

  };

  const handleSearch = (searchText: string) => {
    setSearchTerm(searchText);
    fetchMovies(1, searchText);
    setCurrentPage(1);
  };

  return (
    <div>
      <SearchBar onSearch={(term: string) => handleSearch(term)} />
      <MovieListContainer>
        {movies?.map((movie: any) => (
          <StyledLink key={movie.id} to={`/movies/${movie.id}`} >
            <MovieCard key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
              <p>Popularity: {movie.popularity}</p>
            </MovieCard>
          </StyledLink>

        ))}
      </MovieListContainer>
      <PaginationContainer>
        <Button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} >
          Prev
        </Button>
        <span>Page {currentPage}</span>
        <Button onClick={() => handlePageChange(currentPage + 1)}>Next</Button>
      </PaginationContainer>
    </div>


  );
};
