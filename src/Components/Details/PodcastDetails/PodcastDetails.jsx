import React, { useEffect, useState } from "react";
import PostNavigation from "../PostNavigation/PostNavigation";
import SocialSharing from "../../SocialSharing";
import SubHeading from "../Subheading/Subheading";
import { Link, useParams } from "react-router-dom";
import Helmet from "../../Helmet/Helmet";

const PodcastDetails = () => {
  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extracting slug from route parameters using useParams from react-router-dom
  const { slug } = useParams();
  const [podcastData, setPodcastData] = useState(null);
  const [allPodcasts, setAllPodcasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/podcasts.json"); // Assuming podcasts.json is the endpoint
        const data = await response.json();

        const selectedPodcast = data.find((podcast) => podcast.slug === slug); // Finding podcast by slug
        setPodcastData(selectedPodcast); // Setting selected podcast data
        setAllPodcasts(data); // Setting all podcasts data
      } catch (error) {
        console.error("Error fetching podcast data", error);
      }
    };

    fetchData();
  }, [slug]);

  // Displaying loading state while podcastData is being fetched
  if (!podcastData) {
    return <div>Loading...</div>;
  }

  // Selecting latest episodes from all podcasts data
  const latestEpisodes = allPodcasts.slice(0, 3);

  return (
    <Helmet title="Fyrre">
      <div className="podcastdetails__container">
        <PostNavigation href="/podcast">Podcast</PostNavigation>
        <div className="podcast__content">
          <div className="podcast__content__left">
            <div className="podcast__cover">
              <img src={podcastData.img} alt={podcastData.imgAlt} />
            </div>
            <div className="podcast__single__meta">
              <p>Listen on</p>
              {/* Social sharing component */}
              <SocialSharing
                links={[
                  {
                    href: "https://open.spotify.com",
                    ariaLabel: "Visit our Spotify page",
                    src: "/icons/ri_spotify-fill.svg",
                    alt: "Spotify Logo",
                  },
                  {
                    href: "https://www.apple.com/apple-podcasts/",
                    ariaLabel: "Visit our Apple page",
                    src: "/icons/ri_apple-fill.svg",
                    alt: "Apple Logo",
                  },
                  {
                    href: "https://soundcloud.com",
                    ariaLabel: "Visit our Soundcloud page",
                    src: "/icons/ri_soundcloud-line.svg",
                    alt: "Sound Cloud Logo",
                  },
                ]}
              />
            </div>
            <div className="post__items">
              <strong>Date</strong>
              <p>{podcastData.date}</p>
            </div>
            <div className="post__items">
              <strong>Duration</strong>
              <p>{podcastData.duration}</p>
            </div>
            <div className="post__items">
              <strong>Share</strong>
              <p>
                {/* Another instance of SocialSharing component */}
                <SocialSharing
                  links={[
                    {
                      href: "#",
                      ariaLabel: "Visit our Instagram page",
                      src: "/icons/ri_instagram-line.svg",
                      alt: "Instagram logo",
                    },
                    {
                      href: "#",
                      ariaLabel: "Visit our Twitter page",
                      src: "/icons/ri_twitter-fill.svg",
                      alt: "Twitter logo",
                    },
                    {
                      href: "#",
                      ariaLabel: "Visit our Facbook page",
                      src: "/icons/ri_facebook-fill.svg",
                      alt: "FaceBook Logo",
                    },
                  ]}
                />
              </p>
            </div>
          </div>
          <div className="podcast__content__right">
            <div className="podcast__episode">
              <h3>{podcastData.episode}</h3>
            </div>
            <div className="podcast__heading">
              <h1>{podcastData.title}</h1>
            </div>
            <div className="podcast__short__description">
              <p>{podcastData.content[0].summary}</p>
            </div>
            <div className="podcast__description">
              <p>{podcastData.content[0].section1}</p>
              <blockquote>{podcastData.content[0].quote}</blockquote>
              <p>{podcastData.content[0].section2}</p>
            </div>
          </div>
        </div>
        <SubHeading url="/podcast" linkText="See all" >
          Latest Episodes
        </SubHeading>
        <div className="latest-podcasts__bottom">
          {/* Mapping through latest episodes to display them */}
          {latestEpisodes.map((episode, index) => (
            <div key={index} className="latest-podcasts__bottom-item">
              <div className="latest-podcasts__bottom-item-top">
                <div className="image-container">
                  <Link to={`/podcast/${episode.slug}`}>
                    <img
                      className="latest-podcast-img"
                      src={episode.img}
                      alt={episode.imgAlt}
                    />
                  </Link>
                </div>
              </div>
              <div className="latest-podcasts__bottom-item-bottom">
                <div className="latest-podcasts__bottom-item-bottom-title">
                  <Link to={`/podcast/${episode.slug}`}>
                    <h3>{episode.title}</h3>
                  </Link>
                </div>
                <div className="latest-podcasts__bottom-item-bottom-meta">
                  <div className="subnav__item">
                    <strong>Date</strong>
                    <p>{episode.date}</p>
                  </div>
                  <div className="subnav__item">
                    <strong>Duration</strong>
                    <p>{episode.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default PodcastDetails;
