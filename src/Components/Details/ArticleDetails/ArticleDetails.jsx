import React, { useEffect } from "react";
import PostNavigation from "../PostNavigation/PostNavigation";
import { Link } from "react-router-dom";
import SocialSharing from "../../SocialSharing";
import SubHeading from "../Subheading/Subheading";
import jsonData from "../../../Assets/data/articles.json";
import "./ArticleDetails.css"; 
import Helmet from "../../Helmet/Helmet";


const ArticleDetails = ({ match }) => {
  const allArticles = jsonData.flatMap((author) =>
    author.articles.map((article) => ({ ...article, author: author.author }))
  );

  const sortedArticles = allArticles.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const latestArticles = sortedArticles.slice(0, 3);

  const articleSlug = match.params.slug;

  const authorData = jsonData.find(
    (author) =>
      author.articles.find((article) => article.slug === articleSlug) !==
      undefined
  );

  const article = authorData.articles.find(
    (article) => article.slug === articleSlug
  );

  const authorName = authorData.author;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="Fyrre">
    <div className="articledetails__container">
      <PostNavigation href="/magazine">Magazine</PostNavigation>
      <div className="articledetails__container__title">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </div>
      <div className="articledetails__container__meta">
        <div className="articledetails__container__meta__items">
          <div className="subnav__item">
            <strong>Text</strong>
            <p className="underline">{authorName}</p>
          </div>
          <div className="subnav__item">
            <strong>Date</strong>
            <p>{article.date}</p>
          </div>
          <div className="subnav__item">
            <strong>Read</strong>
            <p>{article.read}</p>
          </div>
        </div>
        <Link className="btn" to={"/magazine"}>
          {article.label}
        </Link>
      </div>
      <div className="articledetails__container__img">
        <img src={article.content[0].img} alt="" />
      </div>
      <div className="articledetails__container__post">
        <div className="articledetails__container__post__content">
          <div className="articledetails__container__post__content__left">
            <div className="post_author">
              <img src={authorData.avatar} alt={authorData.imgAlt} />
              <h3>{authorName}</h3>
            </div>
            <div className="post__items">
              <strong>Date</strong>
              <p>{article.date}</p>
            </div>
            <div className="post__items">
              <strong>Read</strong>
              <p>{article.read}</p>
            </div>
            <div className="post__items">
              <strong>Share</strong>
              <p>
                <SocialSharing
                  links={[
                    {
                      href: "https://www.instagram.com",
                      ariaLabel: "Visit our Instagram page",
                      src: "/icons/ri_instagram-line.svg",
                      alt: "Instagram logo",
                    },
                    {
                      href: "https://twitter.com",
                      ariaLabel: "Visit our Twitter page",
                      src: "/icons/ri_twitter-fill.svg",
                      alt: "Twitter logo",
                    },
                    {
                      href: "https://www.youtube.com",
                      ariaLabel: "Visit our YouTube page",
                      src: "/icons/ri_youtube-fill.svg",
                      alt: "YouTube logo",
                    },
                  ]}
                />
              </p>
            </div>
          </div>
          <div className="articledetails__container__post__content__right">
            <p>
              <strong>{article.content[0].summary}</strong>
            </p>
            <p>{article.content[1].section1}</p>
            <blockquote>
              {article.content[2].quote.map((quoteLine, index) => (
                <strong key={index}>{quoteLine}</strong>
              ))}
            </blockquote>
            <p>
              <strong>{article.content[3].summary2}</strong>
            </p>
            <p>{article.content[4].section2}</p>
          </div>
        </div>
      </div>
      <SubHeading url="/magazine" linkText="See all">
        latest posts
      </SubHeading>
      <div className="articles__container post__gird">
        {latestArticles.map((article, index) => (
          <div className="articles__container-items" key={index}>
            <div className="articles__container-items-top">
              <p>{article.date}</p>
              <span className="btn">
                <div>{article.label}</div>
              </span>
            </div>
            <div className="image-container">
              {" "}
              <Link to={`/magazine/${article.slug}`}>
                <img src={article.img} alt={article.imgAlt} />
              </Link>
            </div>
            <h2>
              <Link to={`/magazine/${article.slug}`}>{article.title}</Link>
            </h2>
            <p className="description">{article.description}</p>
            <div className="articles__container-meta">
              <span className="subnav__item">
                <strong>Text</strong>
                <p className="underline">{article.author}</p>
              </span>
              <span className="subnav__item ">
                <strong>Duration</strong>
                <p>{article.read}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Helmet>
  );
};

export default ArticleDetails;
