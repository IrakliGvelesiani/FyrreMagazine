import React from "react";

const SocialMediaLinks = [
  {
    href: "https://www.instagram.com/",
    ariaLabel: "Visit our Instagram page",
    src: "/icons/ri_instagram-line-white.svg",
    alt: "Instagram logo",
  },
  {
    href: "https://twitter.com/home",
    ariaLabel: "Visit our Twitter page",
    src: "/icons/ri_twitter-fill-white.svg",
    alt: "Twitter logo",
  },
  {
    href: "https://www.youtube.com/",
    ariaLabel: "Visit our YouTube page",
    src: "/icons/ri_youtube-fill-white.svg",
    alt: "YouTube logo",
  },
  {
    href: "https://rss.com/",
    ariaLabel: "Visit our RSS feed",
    src: "/icons/ri_rss-fill-white.svg",
    alt: "RSS feed logo",
  },
];

const FooterLinks = () => {
  return (
    <div className="FooterLinks">
      {SocialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link.ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <img
            src={link.src}
            alt={link.alt}
            style={{ maxWidth: "30px", maxHeight: "30px" }}
          />
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
