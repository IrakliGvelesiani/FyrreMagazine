import React, { useEffect, useRef } from "react";
import FooterLinks from "./FooterLinks";
import { Link } from "react-router-dom";
import NewsletterTicker from "../NewsLetterTicker/NewsletterTicker";
import Input from "../UI/Input/Input";
import Logo from "../../Assets/logos/FyrreMagazineLogo-White.svg";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const firstColumn = [
  {
    display: "Art",
    path: "/magazine",
  },
  {
    display: "Sculptures",
    path: "/magazine",
  },
  {
    display: "Street Art",
    path: "/magazine",
  },
];

const secondColumn = [
  {
    display: "Magazine",
    path: "/magazine",
  },
  {
    display: "Podcast",
    path: "/podcast",
  },
  {
    display: "Authors",
    path: "/authors",
  },
];

const thirdColumn = [
  {
    display: "Styleguide",
    path: "/template-info/styleguide",
  },
  {
    display: "Licensing",
    path: "/template-info/licensing",
  },
  {
    display: "Changelog",
    path: "/template-info/changelog",
  },
];

function InvalidMsg(textbox) {
  const emailInput = textbox.current;
  if (emailInput.value === "") {
    emailInput.setCustomValidity("Required email address");
  } else if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("Please enter a valid email address");
  } else {
    emailInput.setCustomValidity("");
  }
}

function Footer() {
  const emailRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    InvalidMsg(emailRef);
    if (emailRef.current.checkValidity()) {
      console.log("Form submitted with email:", emailRef.current.value);
    }
  };

  useEffect(() => {
    const ourText = new SplitType('.newsletter__left', { types: 'chars' });
    const chars = ourText.chars;

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
          trigger: '.newsletter__left',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <footer className="footer">
      <NewsletterTicker />
      <div className="footer-container">
        <div className="newsletter">
          <h2 className="newsletter__left">Design news to your inbox</h2>
          <div className="newsletter__right">
            <form onSubmit={handleFormSubmit}>
              <Input
                ref={emailRef}
                className="input-email"
                type="email"
                placeholder="Email"
                required
              />
              <button className="signup-button" type="submit">
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="footer-grid">
          <img className="footer-grid-logo" src={Logo} alt="" />

          <div className="footer-content">
            {firstColumn.map((item, index) => (
              <p key={index}>
                <Link to={item.path}>{item.display}</Link>
              </p>
            ))}
          </div>

          <div className="footer-content">
            {secondColumn.map((item, index) => (
              <p key={index}>
                <Link to={item.path}>{item.display}</Link>
              </p>
            ))}
          </div>

          <div className="footer-content">
            {thirdColumn.map((item, index) => (
              <p key={index}>
                <Link to={item.path}>{item.display}</Link>
              </p>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-text">
            © Designed by{" "}
            <a href="https://templates.gola.io/template/fyrre">Pawel Gola</a>.
            Developed by{" "}
            <a href="https://github.com/IrakliGvelesiani">Irakli Gvelesiani</a>.
            All content belongs to their respective copyright holders.
          </p>
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
