import React, { useEffect } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";

const StyleGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageTitle imgSrc="/images/titles/StyleGuide.svg"></PageTitle>
      <div className="styleguide__container">
        <div className="styleguide__section">
          <div className="section-left">
            <h2>HEADING CLASSES</h2>
          </div>
          <div className="section-right">
            <div>
              <h1>Heading H1</h1>
            </div>
            <div>
              <h2>Heading H2</h2>
            </div>
            <div>
              <h3>Heading H3</h3>
            </div>
            <div>
              <h4>Heading H4</h4>
            </div>
            <div>
              <h5>Heading H5</h5>
            </div>
            <div>
              <h6>Heading H6</h6>
            </div>
          </div>
        </div>
        <div className="styleguide__section">
          <div className="section-left">
            <h2>HTML Headings</h2>
          </div>
          <div className="section-right">
            <div className="heading-xlarge">Heading XLarge</div>
            <div className="heading-large">Heading Large</div>
            <div className="heading-medium ">Heading Medium</div>
            <div>
              <h1>Heading H1</h1>
            </div>
            <div>
              <h2>Heading H2</h2>
            </div>
            <div>
              <h3>Heading H3</h3>
            </div>
            <div>
              <h4>Heading H4</h4>
            </div>
            <div>
              <h5>Heading H5</h5>
            </div>
            <div>
              <h6>Heading H6</h6>
            </div>
          </div>
        </div>
        <div className="styleguide__section">
          <div className="section-left">
            <h2>Buttons</h2>
          </div>

          <div className="section-right-buttons">
            <h2>Default</h2>
            <div>
              <button to='#' className="styleguide-button">
                button
              </button>
            </div>
            <div>
              <button to="#" className="styleguide-button">
                button
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
