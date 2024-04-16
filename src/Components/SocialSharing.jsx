import React from "react";

const SocialSharing = ({ links }) => {
  const containerStyle = {
    display: "flex",
    gap: "5px",
  };

  const linkStyle = {
    textDecoration: "none",
  };

  const imageStyle = {
    height: "20px",
  };

  return (
    <div style={containerStyle}>
      {links &&
        links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            aria-label={link.ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <img style={imageStyle} src={link.src} alt={link.alt} />
          </a>
        ))}
    </div>
  );
};

export default SocialSharing;
