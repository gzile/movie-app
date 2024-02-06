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


export const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoggedIn } = useAuthContext();
  const [movieDetails, setMovieDetails] = useState<any>({});
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '59de690a34f0dcf244f337e42afa9ae9';
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();

    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
    // Check if the current movie ID is in the list and set the flag
    const found = favoriteMovies.some((movie: any) => movie.id == id);
    setIsFavorite(found);
  }, [id]);

  const handleToggleFavorite = () => {
      setIsFavorite((prevFavorite) => !prevFavorite);
      // Add movie to favorite list in local storage
      const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
      
      const found = favoriteMovies.some((movie: MovieType) => String(movie.id) === id);
      console.log(found);
      if(!found){
        localStorage.setItem('favoriteMovies', JSON.stringify([...favoriteMovies, movieDetails]));
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
        <Button onClick={openModal}> Add Rating
        </Button>
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

