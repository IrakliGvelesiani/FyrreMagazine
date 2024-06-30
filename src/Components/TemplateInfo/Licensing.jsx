import React, { useEffect } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";


const Licensing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PageTitle imgSrc="/images/titles/Licensing.svg"></PageTitle>
      <div className="licensing__container">
        <div className="medium__size__text">
          All graphical assets in this template are licensed for personal and
          commercial use. If you'd like to use a specific asset, please check
          the license below
        </div>

        <div className="licensing__section">
          <h2>Photos</h2>
          <div>
            All images in this template are coming from Unsplash or Pexels. You
            are free to use them for personal & commercial use.
          </div>
          <div className="licensing__grid">
            <div className="licensing__grid__left">
              <div className="licensing__grid__left-top">
                <h3>Unsplash</h3>
              </div>
              <div className="licensing__grid-bottom">
                <a href="https://unsplash.com/">Source</a>
                <a href="https://unsplash.com/license">License</a>
              </div>
            </div>
            <div className="licensing__grid__right">
              <div className="licensing__grid__right-top">
                <h3>Pexels</h3>
              </div>
              <div className="licensing__grid-bottom">
                <a href="https://www.pexels.com/">Source</a>
                <a href="https://www.pexels.com/license/">License</a>
              </div>
            </div>
          </div>
        </div>

        <div className="licensing__section">
          <h2>Fonts</h2>
          <div>
            The font in this template is General Sans from Fontshare. You are
            free to use this font for personal & commercial use.
          </div>
          <div className="fontshare">
            <div>
              <h3>Fontshare</h3>
            </div>
            <div className="fontshare-bottom">
              <a href="https://www.fontshare.com/fonts/general-sans">Source</a>
              <a href="https://www.fontshare.com/">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licensing;
