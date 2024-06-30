import React, { useState, useEffect } from "react";
import { getArticles as fetchArticles } from "./getArticlels"; 
import { Link } from "react-router-dom";
import formatString from "../Utils/FormatString"; 

const Authors = () => {
  const [authors, setAuthors] = useState([]); // State to store fetched authors data

  // Effect to scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Effect to fetch authors data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchArticles(); // Fetching authors data using fetchArticles function
      setAuthors(data); // Setting fetched authors data to state
    };

    fetchData(); // Calling fetchData function to initiate data fetching
  }, []);

  return (
    <div className="authors__container">
      {authors.map((author, index) => (
        <div key={author.id} className="authors__container-item">
          <div className="authors__container-list">
            <Link
              to={`authors/${formatString(author.author)}`}
              className="author__link"
            >
              <img
                className="author__avatar"
                src={author.avatar}
                alt={author.imgAlt}
                width={"150px"}
              />
            </Link>

            <div className="author__title">
              <Link
                to={`authors/${formatString(author.author)}`}
                className="author__title-link"
              >
                <h2>{author.author}</h2>
              </Link>
            </div>

            <div className="author__row-meta">
              <div className="author__row-meta-item sml-txt">
                <strong>Job</strong>
                <p>{author.job}</p>
              </div>
              <div className="author__row-meta-item sml-txt">
                <strong>City</strong>
                <p>{author.city}</p>
              </div>
            </div>

            <div className="author__row-button">
              <Link
                to={`authors/${formatString(author.author)}`}
                className="author__button-link"
              >
                <div className="author__button-wrapper">
                  <span>About</span>
                  <div>
                    <img
                      src="/icons/ri_arrow-right-line.svg"
                      alt="An arrow pointing right"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Authors;
