import React, { FunctionComponent, useState } from 'react';

import './SearchBar.css';

interface SearchBarProps{
  onSetSearchQuery: (searchTerm: string)=> void;
  toast: (
    message: string,
    options?: {
      icon: string;
      style: {
        borderRadius: string;
        background: string;
        color: string;
      };
    }
  ) => void;
}
const SearchBar: FunctionComponent<SearchBarProps> = ({ onSetSearchQuery, toast }) => {
  const [error, setError] = useState<boolean>(false); 
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const value: string = (e.target as HTMLFormElement).search.value;
    if (value.trim() === "") {
      setError(true); 
      toast("Please enter a valid value!", {
        icon: "✍🏻",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    setError(false); 
    onSetSearchQuery(value.trim());
    e.currentTarget.reset();
  };
  
  return (
    <header className="header">
      <form className="searchForm" onSubmit={onSubmit}>
        <input
          className={`searchField ${error ? 'error' : ''}`} 
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className="searchBtn" title="Press for search" type="submit">
          🔎
        </button>
      </form>
      
    </header>
  );
};

export default SearchBar;





