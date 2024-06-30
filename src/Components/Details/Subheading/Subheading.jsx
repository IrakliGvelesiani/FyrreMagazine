import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Subheading = ({ children, className, url, linkText }) => {
  useEffect(() => {
    // Animation setup using SplitType and GSAP
    const headingText = new SplitType('.post__latest h2', { types: 'chars' });
    const chars = headingText.chars;

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
          trigger: '.post__latest h2',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="post__latest">
      <h2 className={className}>{children}</h2>
      <Link className="post__latest__link" to={url}>
        <p>{linkText}</p>
        <img src="/icons/ri_arrow-right-line.svg" alt="A right black arrow" />
      </Link>
    </div>
  );
};

export default Subheading;
