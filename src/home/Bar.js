import React from "react";
import "./Bar.css";

const Bar = ({ searchQuery, onSearchQueryChange }) => {
  const handleSearchIconClick = () => {
    performSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  const performSearch = () => {
    onSearchQueryChange(searchQuery);
  };

  return (
    <div className="bar-container">
      <div className="app-name">SpectreNews</div>
      <div className="navigation">
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
      </div>
      <div className="bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearchQueryChange(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <span
          className="material-icons search-icon"
          onClick={handleSearchIconClick}
        >
          search
        </span>
      </div>
    </div>
  );
};

export default Bar;