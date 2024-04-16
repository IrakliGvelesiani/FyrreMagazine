import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "./Header.css";
import Logo from "../../Assets/logos/FyrreMagazineLogo-Black.svg";
import Hamburger from "hamburger-react";
import SocialSharing from "../SocialSharing"; 
import Line from "../../Assets/icons/line.svg";

const MenuItem = [
  {
    display: "Magazine",
    path: "/magazine",
    cName: "nav__links"
  },
  {
    display: "Podcast",
    path: "/podcast",
    cName: "nav__links"
  },
  {
    display: "Authors",
    path: "/authors",
    cName: "nav__links"
  },
];

const Header = () => {
  const [isOpen, setOpen] = useState(false);
 

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    const handleScroll = () => {
      setOpen(false); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="header__items">
      <div className="header__logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="menu__icon">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <ul className={isOpen ? "nav__menu active" : "nav__menu"}>
        {MenuItem.map((menuItem, index) => (
          <li key={index}>
            <Link to={menuItem.path} className={menuItem.cName} onClick={handleLinkClick}>{menuItem.display}</Link>
          </li>
        ))}
        <img className="line__icon" src={Line} alt="" />
        <div className="social__links">
          <SocialSharing 
            links={[
              {
                href: "https://www.instagram.com/",
                ariaLabel: "Visit our Instagram page",
                src: "/icons/ri_instagram-line.svg",
                alt: "Instagram logo",
              },
              {
                href: "https://twitter.com/home",
                ariaLabel: "Visit our Twitter page",
                src: "/icons/ri_twitter-fill.svg",
                alt: "Twitter logo",
              },
              {
                href: "https://www.youtube.com/",
                ariaLabel: "Visit our YouTube page",
                src: "/icons/ri_youtube-fill.svg",
                alt: "YouTube logo",
              },
              {
                href: "https://rss.com/",
                ariaLabel: "Visit our RSS feed",
                src: "/icons/ri_rss-fill.svg",
                alt: "RSS feed logo",
              },
            ]}
          />
        </div>
      </ul>
      {isOpen && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </header>
  );
};

export default Header;
