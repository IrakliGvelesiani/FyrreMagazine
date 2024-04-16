import React from "react";
import Helmet from "../../Components/Helmet/Helmet";
import PageTitle from "../../Components/PageTitle/PageTitle";
import NewsTicker from "../../Components/NewsTicker/NewsTicker";
import Hero from "../../Components/Hero/Hero";
import LatestArticle from "../../Components/LatestArticle/LatestArticle";
import LatestPodcasts from "../../Components/LatestPodcasts/LatestPodcasts";
import AuthorsList from "../../Components/AuthorsList/AuthorsList";

const Home = () => {
  return (
    <Helmet title="Fyrre">
      <div>
        <PageTitle imgSrc="/images/titles/Art&Life.svg"></PageTitle>
        <NewsTicker />
        <Hero />
        <LatestArticle />
        <LatestPodcasts />
        <AuthorsList />
      </div>
    </Helmet>
  );
};

export default Home;
