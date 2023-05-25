import React, { useState, useEffect } from "react";
import Panel from "../panels/Panel";
import "./NewsFeed.css";

const NewsFeed = ({ searchQuery }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews(searchQuery);
  }, [searchQuery]);

  const fetchNews = async (query) => {
    const apiKey = "48e819ee7bc245ffa34857e9955e0f3d";
    const url = query
      ? `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
      : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
  };

  return (
    <div className="news-feed">
      <div className="news-feed-container">
        {articles.map((article, index) => (
          <Panel
            key={index}
            title={article.title}
            content={article.description}
            url={article.url}
            imageUrl={article.urlToImage}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;