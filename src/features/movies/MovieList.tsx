import React from 'react';
import styled from 'styled-components';
import { useMovieContext } from '../../contexts/MovieContext';

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MovieCard = styled.div`
  margin: 16px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;

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
