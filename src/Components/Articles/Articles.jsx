import React, { useEffect, useState } from "react";
import Data from "../../Assets/data/articles.json";
import { Link } from "react-router-dom";
import Helmet from "../Helmet/Helmet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Articles() {
  const data = Data; // Storing article data from JSON

  const [selectedLabel, setSelectedLabel] = useState("All"); // State to manage selected label filter

  // Creating labels array including "All" and unique labels from article data
  const labels = [
    "All",
    ...new Set(
      data.flatMap((article) => article.articles.map((item) => item.label))
    ),
  ];


   // Effect to scroll to the top of the page when the component mounts
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filtering articles based on selected label
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

  // Function to check if a label is currently selected
  const isLabelSelected = (label) => selectedLabel === label;

  // Animation effect using gsap to animate article cards on page load and label change
  useEffect(() => {
    const cards = document.querySelectorAll('.articles__container-items'); // Selecting all article cards

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          y: 100,
          opacity: 0,
          rotation: 3
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
          stagger: {
            amount: 0.5,
            each: 0.25,
            from: index % 2 === 0 ? "start" : "center",
          },
        }
      );
    });
  }, [filteredArticles]); // Dependency ensures effect runs when filteredArticles changes

  return (
    <Helmet title="Magazine"> {/* Helmet component manages document title */}
      <div className="container">
        <div className="categories__section">
          <h3 className="categories__section-title">Categories</h3>
          {data && (
            <div className="categories__section-buttons">
              {/* Mapping over labels to create category buttons */}
              {labels.map((label, index) => (
                <button
                  className={`btn filter__btn ${isLabelSelected(label) ? "active" : ""}`}
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
          {/* Mapping over filtered articles to display article cards */}
          {filteredArticles.map((articleData, index) => (
            <div className="articles__container-items" key={index}>
              <div className="articles__container-items-top">
                <p>{articleData.date}</p>
                <span className="btn">
                  <div>{articleData.label}</div>
                </span>
              </div>
              <div className="image-container">
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
