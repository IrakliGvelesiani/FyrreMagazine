import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Helmet = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
    return () => {
      // Optionally reset document title when component unmounts
      // document.title = "Default Title";
    };
  }, [title]);

  return <>{children}</>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Helmet;
