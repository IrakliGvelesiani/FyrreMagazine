import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

// Import the articles data from your JSON file
import authorData from "../../Assets/data/articles.json";

const PopularArticles = () => {
  // Assuming you want to display popular articles from the first author
  const popularArticles = authorData[0].articles
    .filter((article) => article.popular)
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="popular__posts__container">
      <div className="popular__posts__title">
        <h4>Popular posts</h4>
      </div>
      {popularArticles.map((article, index) => (
        <div key={article.title}>
          <div className="popular__posts">
            <div className="popular__posts__list">
              <p className="popular__posts__list__num">{`0${index + 1}`}</p>
              <div className="popular__posts__list__items">
                <h4>
                  <Link to={`/magazine/${article.slug}`}>{article.title}</Link>
                </h4>
                <div className="subnav__item">
                  <strong>Author</strong>
                  <p className="underline">{authorData[0].author}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularArticles;
