import React from 'react';
import { useMovieContext } from '../../contexts/MovieContext';
import { MovieCard } from './MovieCard';
import { MovieListContainer } from './MovieListContainer';

const MovieList: React.FC = () => {
  const { movies } = useMovieContext();

  return (
    <MovieListContainer>
      {movies?.map((movie: any) => (
        <MovieCard key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
          <p>Popularity: {movie.popularity}</p>
        </MovieCard>
      ))}
    </MovieListContainer>
  );
};

export default MovieList;
