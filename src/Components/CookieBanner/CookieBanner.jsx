import React, { useState, useEffect } from 'react';
import CookiePolicyPDF from '../../Assets/cookie_policy.pdf';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', false);
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const openCookiePolicy = () => {
    window.open(CookiePolicyPDF, '_blank'); // Opens the PDF in a new tab
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner">
        <button className="close-button" onClick={handleClose}>×</button>
        <p>
          We use first-party and third-party cookies to understand the uses of our online store and to be able to improve it, 
          adapt the content to your preferences and personalize our advertisements, marketing, and publications on social networks. 
          For more information you can consult our <span className="cookie-policy-link" onClick={openCookiePolicy}>Cookie Policy</span>.
        </p>
        <div className="cookie-buttons">
          <button className="accept-button" onClick={handleAccept}>Accept</button>
          <button className="decline-button" onClick={handleDecline}>Decline</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
