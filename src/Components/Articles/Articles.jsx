// Articles.jsx

import React, { useState} from "react";
import Data from "../../Assets/data/articles.json";
import { Link } from "react-router-dom";
import "./Articles.css";
import Helmet from "../Helmet/Helmet";

export default function Articles() {
  const data = Data; // Remove the () to treat it as a direct import
  const [selectedLabel, setSelectedLabel] = useState("All");

  const labels = [
    "All",
    ...new Set(
      data.flatMap((article) => article.articles.map((item) => item.label))
    ),
  ];

  const filteredArticles = data.flatMap((article) =>
    article.articles
      .filter((item) =>
        selectedLabel === "All" ? true : selectedLabel === item.label
      )
      .map((item) => ({
        ...item,
        author: article.author,
      }))
  );


  const isLabelSelected = (label) => selectedLabel === label;

  return (
    <Helmet title="Magazine">
      <div className="container">
        <div className="categories__section">
          <h3 className="categories__section-title">Categories</h3>
          {data && (
            <div className="categories__section-buttons">
              {labels.map((label, index) => (
                <button
                  className={`btn ${isLabelSelected(label) ? "active" : ""}`}
                  key={index}
                  onClick={() => setSelectedLabel(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="articles__container">
          {filteredArticles.map((articleData, index) => (
            <div className="articles__container-items" key={index}>
              <div className="articles__container-items-top">
                <p>{articleData.date}</p>
                <span className="btn">
                  <div>{articleData.label}</div>
                </span>
              </div>
              <div className="image-container">
                {" "}
                <Link to={`magazine/${articleData.slug}`}>
                  <img src={articleData.img} alt={articleData.imgAlt} />
                </Link>
              </div>
              <h2>
                <Link to={`/magazine/${articleData.slug}`}>
                  {articleData.title}
                </Link>
              </h2>
              <p className="description">{articleData.description}</p>
              <div className="articles__container-meta">
                <span className="subnav__item">
                  <strong>Text</strong>
                  <p className="underline">{articleData.author}</p>
                </span>
                <span className="subnav__item ">
                  <strong>Duration</strong>
                  <p>{articleData.read}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Helmet>
  );
}
