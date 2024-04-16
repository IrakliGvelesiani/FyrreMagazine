import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPodcasts } from "./getPodcasts";
import "./Podcasts.css";

const Podcasts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const podcastsData = await getPodcasts();
        setData(podcastsData);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="podcasts__container">
      {data.map((podcasts, index) => (
        <div key={podcasts.id}>
          <div className="podcasts__container-list">
            <div className="episode__item">
              <p className="epsode__number">{podcasts.episode.slice(7)}</p>
            </div>
            <div className="image-container">
              <Link to={`podcast/${podcasts.slug}`}>
                <img
                  className="episode-img"
                  src={podcasts.img}
                  alt={podcasts.imgAlt}
                />
              </Link>
              <div className="episode__item mobile">
              <p className="epsode__number">{podcasts.episode.slice(7)}</p>
            </div>
            </div>
            <div className="episode-title">
              <Link to={`podcast/${podcasts.slug}`}>
                <h2>{podcasts.title}</h2>
              </Link>
              <div className="episode-meta-mobile">
              <div className="podcast-row-meta-item sml-txt">
                <strong>Date</strong>
                <p>{podcasts.date}</p>
              </div>
              <div className="podcast-row-meta-item sml-txt">
                <strong>Duration</strong>
                <p>{podcasts.duration}</p>
              </div>
            </div>
            </div>
            <div className="episode-meta">
              <div className="podcast-row-meta-item sml-txt">
                <strong>Date</strong>
                <p>{podcasts.date}</p>
              </div>
              <div className="podcast-row-meta-item sml-txt">
                <strong>Duration</strong>
                <p>{podcasts.duration}</p>
              </div>
            </div>
            <div className="episode__button">
              <Link to={`podcast/${podcasts.slug}`}>
                <span>listen</span>
                <img
                  src="/icons/ri_arrow-right-line.svg"
                  alt="An arrow pointing right"
                />
              </Link>
            </div>
          </div>
          {index < data.length - 1 && (
            <div className="border border-black my-6" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Podcasts;
