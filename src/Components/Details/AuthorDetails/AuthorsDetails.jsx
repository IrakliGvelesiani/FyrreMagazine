import React, { useEffect, useState } from "react";
import PostNavigation from "../PostNavigation/PostNavigation";
import SocialSharing from "../../SocialSharing";
import { Link } from "react-router-dom";
import Helmet from "../../Helmet/Helmet";

const AuthorsDetails = ({ match }) => {
  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extracting slug from route parameters
  const { slug } = match.params;
  const [authorData, setAuthorData] = useState(null);

  // Fetching author data based on the slug
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/data/articles.json`); // Assuming data/articles.json is the endpoint
        const data = await response.json();

        const selectedAuthor = data.find((author) => author.slug === slug); // Finding author by slug

        setAuthorData(selectedAuthor); // Setting author data once fetched
      } catch (error) {
        console.error("Error fetching author data", error);
      }
    };

    fetchData();
  }, [slug]);

  // Displaying loading state while author data is being fetched
  if (!authorData) {
    return <div>Loading...</div>;
  }

  // Destructuring author data for easier access
  const {
    author,
    job,
    city,
    articles,
    avatar,
    imgAlt,
    biography: { summary, body },
  } = authorData;

  return (
    <Helmet title="Fyrre">
      <div className="authorsdetails__container">
        <PostNavigation href="/authors">Authors</PostNavigation>
        <div className="authors__content">
          <div className="authors__content__left">
            <div className="authors__img">
              <img src={avatar} alt={imgAlt} />
            </div>
            <div className="authors__content__meta">
              <p>follow</p>
              {/* Social sharing component */}
              <SocialSharing
                links={[
                  {
                    href: "https://www.instagram.com",
                    ariaLabel: "Visit our Instagram page",
                    src: "/icons/ri_instagram-line.svg",
                    alt: "Instagram Logo",
                  },
                  {
                    href: "https://twitter.com",
                    ariaLabel: "Visit our Twitter page",
                    src: "/icons/ri_twitter-fill.svg",
                    alt: "Twitter Logo",
                  },
                  {
                    href: "https://www.youtube.com",
                    ariaLabel: "Visit our FaceBook page",
                    src: "/icons/ri_facebook-fill.svg",
                    alt: "FaceBook Logo",
                  },
                ]}
              />
            </div>
            <div className="post__items">
              <strong>Job</strong>
              <p>{job}</p>
            </div>
            <div className="post__items">
              <strong>City</strong>
              <p>{city}</p>
            </div>
          </div>
          <div className="authors__content__right">
            <div className="authors__title">
              <h1>{author}</h1>
            </div>
            <div className="authors__short__description">
              <p>{summary}</p>
            </div>

            <div className="authors__description">
              <p>{body}</p>
            </div>
          </div>
        </div>

        {/* Displaying articles by the author */}
        <div className="articles__by__author">
          <div className="articles__by__author__title">
            <h2>Articles By</h2>
            <h2>{author}</h2>
          </div>
          <div className="authors__articles__list">
            {articles.map((article) => (
              <div key={article.slug} className="listitem">
                <Link to={`/magazine/${article.slug}`}>
                  <img src={article.img} alt="" />
                </Link>

                <div className="authors__articles__list__content">
                  <div className="authors__articles__list__content__title">
                    <Link to={`/magazine/${article.slug}`}>
                      <h3>{article.title}</h3>
                    </Link>
                  </div>
                  <div className="authors__articles__list__content__meta">
                    <div className="metaitem">
                      <strong>Date</strong>
                      <p>{article.date}</p>
                    </div>
                    <div className="metaitem">
                      <strong>Read</strong>
                      <p>{article.read}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default AuthorsDetails;
