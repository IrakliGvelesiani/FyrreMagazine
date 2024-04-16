import React from "react";
import Helmet from "../../Components/Helmet/Helmet";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Podcasts from "../../Components/Podcasts/Podcasts";

const Podcast = () => {
  return (
    <Helmet title="Podcast">
      <div>
        <PageTitle imgSrc="/images/titles/Podcast.svg"></PageTitle>
        <Podcasts />
      </div>
    </Helmet>
  );
};

export default Podcast;
