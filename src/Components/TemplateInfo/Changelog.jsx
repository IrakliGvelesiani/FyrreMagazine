import React, { useEffect } from "react";
import PageTitle from "../PageTitle/PageTitle";


const Changelog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageTitle imgSrc="/images/titles/Changelog.svg"></PageTitle>
      <div className="changelog__container">
        <div className="changelog__container__title">
          <h2>Version 1.0</h2>
        </div>
        <ul className="list">
          <li>Initial Template Release</li>
        </ul>
      </div>
    </div>
  );
};

export default Changelog;
