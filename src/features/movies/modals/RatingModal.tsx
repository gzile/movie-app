import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { CloseButton, ModalBtnContainer, RatingLabel, Star, StarContainer } from '../../ui/StyledComponents';
import config from '../../../config/config';

const modalRoot = document.getElementById('root');

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const RatingModal: React.FC<{ onClose: () => void, movieId: number }> = ({ onClose, movieId }) => {
  const [rating, setRating] = useState(0);

  const handleRateMovie = async (newRating: number) => {
    try {

      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating`, {
        method: 'POST', 
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${config.movieAPIToken}`
        },
        body: JSON.stringify({value: newRating})
      });
  
      console.info('Rating added successfully:', response.json);
      setRating(newRating);
    } catch (error) {
      console.error('Error adding rating:', error);
    }

  };

  return createPortal(
    <ModalOverlay>
      <ModalContent>
        <h2>Rate the Movie</h2>
        <RatingLabel>Select a rating:</RatingLabel>
        <StarContainer>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
            <Star key={star} filled={star <= rating} onClick={() => handleRateMovie(star)}>
              ★
            </Star>
          ))}
        </StarContainer>
        <ModalBtnContainer>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalBtnContainer>
      </ModalContent>
    </ModalOverlay>,
    modalRoot!
  );
};

export default RatingModal;
