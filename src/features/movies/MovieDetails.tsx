import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext ';
import {
  Container,
  DetailsContainer,
  MovieImage,
  MovieTitle,
  Popularity,
  ReleaseDate,
} from '../ui/StyledComponents';
import Button from '../ui/Button';
import RatingModal from './modals/RatingModal';
import { MovieType } from '../../contexts/MovieContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import config from '../../config/config';

export const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoggedIn } = useAuthContext();
  const [movieDetails, setMovieDetails] = useState<any>({});
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [favoriteMovies, setFavoriteMovies] = useLocalStorage<MovieType[]>('favoriteMovies', []); // Use useLocalStorage hook

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${config.movieAPIKey}`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();

    // Check if the current movie ID is in the list and set the flag
    const found = favoriteMovies.some((movie: MovieType) => String(movie.id) === id);
    setIsFavorite(found);
  }, [id, favoriteMovies]);

  const handleToggleFavorite = () => {
    setIsFavorite((prevFavorite) => !prevFavorite);
    //Add or remove the movie from the favorite list
    if (!isFavorite) {
      setFavoriteMovies([...favoriteMovies, movieDetails]);
    } else {
      const updatedFavorites = favoriteMovies.filter((movie: MovieType) => String(movie.id) !== id);
      setFavoriteMovies(updatedFavorites);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DetailsContainer>
      <MovieImage src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
      <MovieTitle>{movieDetails.title}</MovieTitle>
      <ReleaseDate>Release Date: {movieDetails.release_date}</ReleaseDate>
      <Popularity>Popularity: {movieDetails.popularity}</Popularity>
      <Container>
        {isLoggedIn && (
          <Button onClick={openModal}> Add Rating </Button>
        )}
        {isModalOpen && <RatingModal onClose={closeModal} movieId={movieDetails.id} />}
      </Container>

      {isLoggedIn && (
        <Button onClick={handleToggleFavorite}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      )}
    </DetailsContainer>
  );
};
