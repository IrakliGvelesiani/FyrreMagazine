import React, { useEffect } from "react";
import authorData from "../../Assets/data/articles.json";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AuthorsHome = () => {
  // Effect to animate text and cards when the component mounts
  useEffect(() => {
    // Splitting the title text into individual characters for animation
    const ourText = new SplitType('.authors-home__top-title h2', { types: 'chars' });
    const chars = ourText.chars;

    // Animating each character of the title text
    gsap.fromTo(
      chars,
      { 
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.authors-home__top-title',
          start: 'top 80%',
        },
      }
    );

    // Selecting all author cards for animation
    const cards = document.querySelectorAll('.authors-home__bottom-item');

    // Animating each author card
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
  }, []);

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
