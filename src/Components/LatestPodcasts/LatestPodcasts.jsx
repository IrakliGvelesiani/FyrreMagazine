import React from "react";
import podcastData from "../../Assets/data/podcasts.json";
import "./LatestPodcasts.css";
import { Link } from "react-router-dom";

const LatestPodcasts = () => {
  const selectedPodcasts = podcastData.slice(0, 3);

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
                  <div className="subnav-item">
                    <strong>Date</strong>
                    <p>{podcast.date}</p>
                  </div>
                  <div className="subnav-item">
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
