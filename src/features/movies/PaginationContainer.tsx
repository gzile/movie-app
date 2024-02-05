import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  margin-bottom: 50px;

  button {
    padding: 8px 12px;
    margin: 0 5px;
    cursor: pointer;
    background-color: #0038d2;
    color: #fff;
    border: none;
    border-radius: 4px;

    &:disabled {
      background-color: #c4c6d1;
      cursor: not-allowed;
    }
  }
`;

export default PaginationContainer;
