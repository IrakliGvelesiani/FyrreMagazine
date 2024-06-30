import React from "react";
import Marquee from "react-fast-marquee";

const NewsletterTicker = () => {
  return (
    <div className="newsletter-ticker">
      <Marquee speed={120} gradient={false} pauseOnHover>
        <div className="newsletter-ticker__text__first">
          <span>NEWSLETTER+++</span>
          <span>NEWSLETTER+++</span>
          <span>NEWSLETTER+++</span>
          <span>NEWSLETTER+++</span>
          <span>NEWSLETTER+++</span>
        </div>
        <div className="newsletter-ticker__text__second">
          <span>NEWSLETTER+++</span>
          <span>NEWSLETTER+++</span>
          <span>NEWSLETTER+++</span>
          <span>NEWSLETTER+++</span>
          <span>NEWSLETTER+++</span>
          <span>NEWSLETTER+++</span>
        </div>
      </Marquee>
    </div>
  );
};

export default NewsletterTicker;
