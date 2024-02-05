import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 20px;

  input {
    padding: 8px;
    width: 200px;
    margin-right: 10px;
  }

  button {
    padding: 8px 12px;
    cursor: pointer;
    background-color: #0038d2;
    color: #fff;
    border: none;
    border-radius: 4px;

    &:hover {
      background-color: #01114a;
    }
  }
`;

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </SearchContainer>
  );
};

export default SearchBar;
