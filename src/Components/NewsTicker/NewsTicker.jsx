import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const NewsTicker = () => {
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    const handleResize = () => {
 
      if (window.innerWidth <= 479) {
        setHeight("55px"); 
      } else {
        setHeight("auto");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

   
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const announcmentStyle = {
    marginTop: "1.5rem",
    columnGap: "16px",
    rowGap: "16px",
    color: "#fff",
    backgroundColor: "#000",
    gridTemplateRows: "auto",
    gridTemplateColumns: "auto 1fr",
    gridAutoColumns: "1fr",
    alignItems: "center",
    paddingLeft: "1.25rem",
    display: "grid",
    maxWidth: "85%",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    height: height, 
  };

  const mobileAnnouncmentStyle = {
    marginTop: "2rem",
    paddingBottom: "1rem",
    paddingLeft: "1rem",
  };

  const newsTickerStyle = {
    textTransform: "uppercase",
    fontWeight: 700,
  };

  const announcmentTextStyle = {
    paddingBottom: "1rem",
  };

  return (
    <div style={announcmentStyle}>
      <div style={newsTickerStyle}>
        <span>News Ticker+++</span>
      </div>
      <Marquee
        speed={120}
        gradient={false}
        style={{ ...mobileAnnouncmentStyle }}
      >
        <div style={announcmentTextStyle}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span>consectetur adipiscing elit +++</span>
        </div>
      </Marquee>
    </div>
  );
};

export default NewsTicker;
