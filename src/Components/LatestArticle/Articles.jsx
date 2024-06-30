import React from "react";
import { Link } from "react-router-dom";

const Article = ({ latestArticles }) => {
  return (
    <div className="latestarticle__post__left">
      {latestArticles.map((article) => (
        <div className="article__post__item" key={article.slug}>
          <div className="article__post__item-list">
            <div className="image-container">
              <Link to={`magazine/${article.slug}`}>
                <img
                  className="latestarticle__avatar"
                  src={article.img}
                  alt={article.imgAlt}
                />
              </Link>
            </div>
            <div className="latestarticle__post__content">
              <div className="article__post__content-top">
                <div className="article__post__content-top-title">
                  <Link to={`magazine/${article.slug}`}>
                    <h3>{article.title}</h3>
                  </Link>
                </div>
                <p>{article.description}</p>
              </div>
              <div className="article__post__content-bottom">
                <div className="article__post__content-meta">
                  <div className="article__post__content-meta-items">
                    <div className="article__meta-item">
                      <strong>Text</strong>
                      <p className="underline">{article.author}</p>
                    </div>
                    <div className="article__meta-item">
                      <strong>Date</strong>
                      <p>{article.date}</p>
                    </div>
                    <div className="article__meta-item">
                      <strong>Read</strong>
                      <p>{article.read}</p>
                    </div>
                  </div>
                  <Link to={`/magazine`} className="btn">
                    {article.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
