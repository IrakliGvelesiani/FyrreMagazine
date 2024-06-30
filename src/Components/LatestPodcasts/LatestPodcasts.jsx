import React, { useEffect } from "react";
import podcastData from "../../Assets/data/podcasts.json";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LatestPodcasts = () => {
  const selectedPodcasts = podcastData.slice(0, 3);

  useEffect(() => {
    // Animation for the title using SplitType and GSAP
    const ourText = new SplitType('.latest-podcasts__top-title h2', { types: 'chars' });
    const chars = ourText.chars;

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
          trigger: '.latest-podcasts__top-title',
          start: 'top 80%',
        },
      }
    );

    // Animation for each podcast card
    const cards = document.querySelectorAll('.latest-podcasts__bottom-item');

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          y: 100,
          opacity: 0,
          rotation: 10
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
  }, []); // Only run once on mount

  return (
    <div className="latest-podcasts">
      <div className="latest-podcasts__top">
        <div className="latest-podcasts__top-title">
          <h2>Podcasts</h2>
        </div>
        <div className="latest-podcasts__top-btn">
          <Link to={"/podcast"} className="all-episodes">
            <div className="btn-wrapper">
              <div className="btn-text">All Episodes</div>
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
      <div className="latest-podcasts__bottom">
        {selectedPodcasts.map((podcast, index) => (
          <div key={index} className="latest-podcasts__bottom-item">
            <div className="latest-podcasts__bottom-item-top">
              <div className="image-container">
                <Link to={`/podcast/${podcast.slug}`}>
                  <img
                    className="latest-podcast-img"
                    src={podcast.img}
                    alt={podcast.imgAlt}
                  />
                </Link>
              </div>
            </div>
            <div className="latest-podcasts__bottom-item-bottom">
              <div className="latest-podcasts__bottom-item-bottom-title">
                <Link to={`/podcast/${podcast.slug}`}>
                  <h3>{podcast.title}</h3>
                </Link>
              </div>
              <div className="latest-podcasts__bottom-item-bottom-meta">
                <div className="latest-podcasts__bottom-item-bottom-meta-item">
                  <div className="subnav__item">
                    <strong>Date</strong>
                    <p>{podcast.date}</p>
                  </div>
                  <div className="subnav__item">
                    <strong>Duration</strong>
                    <p>{podcast.duration}</p>
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

export default LatestPodcasts;
