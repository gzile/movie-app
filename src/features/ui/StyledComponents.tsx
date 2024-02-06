import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const PaginationContainer = styled(Container)`
  justify-content: space-between;
  margin: 20px;
  margin-bottom: 50px;
`;
export const SearchBarContainer = styled(Container)`
  justify-content: space-between;
  margin: 20px;
  margin-bottom: 50px;

  &: hover {
    border: none;
  }
`;

export const DetailsContainer = styled(Container)`
  flex-direction: column;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-bottom: 0;
`;

export const MovieImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const MovieTitle = styled.h2`
  color: #0038d2;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ReleaseDate = styled.p`
  color: #01114a;
  margin-bottom: 10px;
`;

export const Popularity = styled.p`
  color: #9e9d9d;
  margin-bottom: 20px;
`;

export const RatingLabel = styled.span`
  color: #01114a;
  margin-right: 10px;
`;

export const StarContainer = styled(Container)`
  margin-bottom: 0px;
  cursor: pointer;
`;

export const Star = styled.span<{ filled: boolean }>`
  font-size: 24px;
  color: ${(props) => (props.filled ? '#FFD700' : '#ccc')};
  transition: color 0.2s;
  margin-right: 5px;

  &:hover {
    color: #FFD700;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #0038D2;
  flex-grow: 1;
  &:focus, &:focus-visible, &:hover, &:visited, &:link, &:active {
    border: none;
    border-bottom: 1px solid #0038D2;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #0038D2;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #01114A;
  }
`;

export const MovieContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ModalBtnContainer = styled.div`
    display: block;
    margin: 20px

`;
export const CloseButton = styled.button`
    padding: 10px 16px;
    font-size: 16px;
    cursor:pointer;
    background-color: #FFF;
    color: #007BFF;
    border-radius: 4px;
    transitionL background-color 0.3s ease;
    border: 1px solid #007BFF;
    
    
    &:hover {
       color: #0062cc;
    }
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

// Custom css for the layout of the form for login
export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// Styled custom input filed 
export const Input = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const MovieCardTitle = styled.span`
  color: #01114a;
  margin-right: 10px;
`;