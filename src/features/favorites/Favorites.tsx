import React from 'react';
import { MovieCard } from '../movies/MovieCard';
import { MovieListContainer } from '../ui/StyledComponents';
import useLocalStorage from '../../hooks/useLocalStorage';

export const Favorites: React.FC = () => {
  const [favoriteMovies] = useLocalStorage('favoriteMovies', [])

  return (
    <div>
      <h2>Favorite Movies</h2>
      <MovieListContainer>
        {favoriteMovies.map((movie: any) => (
          <MovieCard key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
            <p>Popularity: {movie.popularity}</p>
          </MovieCard>
        ))}
      </MovieListContainer>
    </div>
  );
};
