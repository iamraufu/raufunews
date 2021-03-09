import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
      const [articles, setArticles] = useState([]);
      const url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e1262bf1c6b44883b3b050bb6f95571f';
      useEffect(() => {
            fetch(url)
                  .then(response => response.json())
                  .then(data => setArticles(data.articles));
      })
      return (
            <div>
                  <h1>Top Headlines: {articles.length}</h1>
                  {
                        articles.map(article =><News article={article}></News>)
                  }
            </div>
      );
};

export default TopHeadline;