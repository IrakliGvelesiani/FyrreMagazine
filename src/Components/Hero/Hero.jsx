import React from "react";
import HeroImage from "../../Assets/images/articles/single-post/dont-close-your-eyes.jpg";
import MobileHeroImage from "../../Assets/images/articles/single-post/mobile-dont-close-your-eyes.jpg"; // Path to your mobile image
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <img
        src={MobileHeroImage}
        style={{ width: "100%" }}
        className="hero-img mobile-img"
        alt="Don’t close your eyes (Mobile)"
      />
      <div className="hero-grid">
        <h2 className="hero-title">don’t close your eyes</h2>
        <div className="hero-description">
          <p className="about">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            aspernatur similique maxime dolore modi exercitationem voluptatibus
            obcaecati, expedita omnis accusantium veniam. Laborum numquam illo
            ipsa tempore, eum consequuntur nam nihil iste saepe. Ipsa omnis
            maxime iure consequatur neque libero hic, ratione labore facilis
            repellendus .
          </p>

          <div className="hero-meta">
            <div className="about-section">
              <div className="meta-item">
                <strong>Text</strong>
                <p className="underline">Cristofer Vaccaro</p>
              </div>
              <div className="meta-item">
                <strong>Date</strong>
                <p>September 22, 2022</p>
              </div>
              <div className="meta-item">
                <strong>Read</strong>
                <p>50 Min</p>
              </div>
            </div>
            <Link to="/magazine/dont-close-your-eyes" className="btn">
              Street Art
            </Link>
          </div>
        </div>
      </div>
      <img
        src={HeroImage}
        style={{ width: "100%" }}
        className="hero-img desktop-img"
        alt="Don’t close your eyes"
      />
      
    </div>
  );
};

export default Hero;
