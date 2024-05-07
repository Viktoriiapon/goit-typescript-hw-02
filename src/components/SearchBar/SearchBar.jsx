import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSetSearchQuery, toast }) => {
  const [error, setError] = useState(false); 
  const onSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
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
    e.target.reset();
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





