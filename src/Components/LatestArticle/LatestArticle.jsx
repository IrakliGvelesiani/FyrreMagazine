import React from "react";
import EastIcon from "@mui/icons-material/East";
import "./LatestArticle.css";
import Articles from "./Articles";
import jsonData from "../../Assets/data/articles.json";
import { Link } from "react-router-dom";
import SideBar from "../Sidebar/SideBar";

const Article = () => {
  // Combine all articles into a single array with author info
  const allArticles = jsonData.flatMap((author) =>
    author.articles.map((article) => ({ ...article, author: author.author }))
  );

  // Sort articles by date in descending order
  const sortedArticles = allArticles.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Select the latest 6 articles
  const latestArticles = sortedArticles.slice(0, 6);

  return (
    <div className="article">
      <div className="article__post">
        <Articles latestArticles={latestArticles} />
        <SideBar />
      </div>

      <Link to="/magazine">
        <div className="allarticles__btn__wrapper mobile">
          <div className="allarticles__btn__text">All Articles</div>
          <div className="btn__text__icon">
            <EastIcon />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Article;
