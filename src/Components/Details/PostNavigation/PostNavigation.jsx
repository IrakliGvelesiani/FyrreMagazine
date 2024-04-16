import React from "react";
import { Link } from "react-router-dom";
import "./PostNavigation.css";

export default function PostNavigation({ children, href }) {
  return (
    <div className="post__nav">
      <Link
        className="post__nav__link"
        to={href}
      >
        <img src="/icons/ri_arrow-left-line.svg" alt="Right arrow" />
        Go Back
      </Link>
      <p>{children}</p>
    </div>
  );
}
