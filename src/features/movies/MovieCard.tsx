import styled from 'styled-components';

export const MovieCard = styled.div`
  margin: 16px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  h3 {
    color: #000;
  }
  
  h3:hover {
    color: #01b4e4;
  }

  p {
    color: #000000;
    opacity: 0.6;
  }

`;