import React from "react";
import authorData from "../../Assets/data/articles.json";
import "./AuthorsList.css";
import { Link } from "react-router-dom";

const AuthorsHome = () => {
  return (
    <div className="authors-home">
      <div className="authors-home__top">
        <div className="authors-home__top-title">
          <h2>Authors</h2>
        </div>
        <div className="authors-home__top-btn">
          <Link to={"/authors"} className="all-episodes">
            <div className="btn-wrapper">
              <div className="btn-text">All Authors</div>
              <div className="btn-text-icon">
                <img
                  src="/icons/ri_arrow-right-line.svg"
                  alt="An arrow pointing right"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="authors-home__bottom">
        {authorData.map((author, index) => (
          <div key={index} className="authors-home__bottom-item">
            <div className="authors-home__bottom-item-left">
              <Link to={`authors/${author.slug}`}>
                <img src={author.avatar} alt={author.imgAlt} width={"150px"} />
              </Link>
            </div>
            <div className="authors-home__bottom-item-right">
              <div className="authors-home__bottom-item-right-title">
                <Link to={`authors/${author.slug}`}>
                  <h3>{author.author}</h3>
                </Link>
              </div>
              <div className="authors-home__bottom-item-right-meta">
                <div className="subnav">
                  <div className="subnav-item">
                    <strong>Job</strong>
                    <p>{author.job}</p>
                  </div>
                  <div className="subnav-item">
                    <strong>City</strong>
                    <p>{author.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorsHome;
