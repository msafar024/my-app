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

  const handleLogoClick = () => {
    window.location.reload();
  };

  const performSearch = () => {
    onSearchQueryChange(searchQuery);
  };

  return (
    <div className="bar-container">
      <div className="app-name" onClick={handleLogoClick}> {/* Add onClick handler here */}
        SpectreNews
      </div>
      <div className="navigation">
        <a href="/" className="nav-link">Home</a>
        <div className="dropdown">
          <a href="/about" className="nav-link">About</a>
          <div className="dropdown-content">
            <p>SpectreNews is a news aggregator that filters news based on political bias using the power of OPENAI GPT-4 Technology. Use the slider to filter Right, Left, or Neutral, News media</p>
          </div>
        </div>
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
