import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PageTitle = ({ children, className, imgSrc, imgAlt }) => {
  useEffect(() => {
    // Ensure the image is loaded before animating
    const imageElement = document.querySelector(".page-title img");

    if (imageElement) {
      gsap.fromTo(
        imageElement,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".page-title",
            start: "top 80%", // Adjust this value as needed
          },
        }
      );
    }
  }, []);

  return (
    <div
      className={`page-title ${className}`}
      style={{
        marginTop: "2rem",
        maxWidth: "85%",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h1 style={{ width: "100%" }}>{children}</h1>
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            paddingTop: "6px",
            paddingBottom: "12px",
            width: "100%",
          }}
        />
      )}
    </div>
  );
};

PageTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default PageTitle;
