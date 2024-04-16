import React from "react";
import Authorss from "../../Components/Authoross/Authorss";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Helmet from "../../Components/Helmet/Helmet";

const Authors = () => {
  return (
    <Helmet title="Authors">
      <div>
        <PageTitle imgSrc="/images/titles/Authors.svg"></PageTitle>
        <Authorss />
      </div>
    </Helmet>
  );
};

export default Authors;
