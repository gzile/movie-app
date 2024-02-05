import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../../contexts/AuthContext ';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

const MovieImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const MovieTitle = styled.h2`
  color: #0038d2;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.p`
  color: #01114a;
  margin-bottom: 10px;
`;

const Popularity = styled.p`
  color: #9e9d9d;
  margin-bottom: 20px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RatingLabel = styled.span`
  color: #01114a;
  margin-right: 10px;
`;

const RatingInput = styled.input`
  width: 40px;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #01114a;
  border-radius: 5px;
`;

const FavoriteButton = styled.button`
  background-color: #0038d2;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoggedIn } = useAuthContext();
  const [movieDetails, setMovieDetails] = useState<any>({});
  const [rating, setRating] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

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
  }, [id]);

    // Update movie rating  -  call the api
  const handleRateMovie = (newRating: number) => {
   
    setRating(newRating);
  };
  // Call the API to add to favorite 
  const handleToggleFavorite = () => {
    setIsFavorite((prevFavorite) => !prevFavorite);
  };

  return (
    <DetailsContainer>
      <MovieImage src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt="Movie Poster" />
      <MovieTitle>{movieDetails.title}</MovieTitle>
      <ReleaseDate>Release Date: {movieDetails.release_date}</ReleaseDate>
      <Popularity>Popularity: {movieDetails.popularity}</Popularity>

      <RatingContainer>
        <RatingLabel>Rate this movie:</RatingLabel>
        <RatingInput
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => handleRateMovie(Number(e.target.value))}
        />
      </RatingContainer>

      {isLoggedIn && (
        <FavoriteButton onClick={handleToggleFavorite}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </FavoriteButton>
      )}
    </DetailsContainer>
  );
};

export default MovieDetails;
