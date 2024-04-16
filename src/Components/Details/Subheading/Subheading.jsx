import { Link } from "react-router-dom";
import "./Subheading.css"

const Subheading = ({ children, className, url, linkText }) => (
  <div className="post__latest">
    <h2 className={className}>{children}</h2>
    <Link className="post__latest__link" to={url}>
  <p>
    {linkText}
  </p>
  <img src="/icons/ri_arrow-right-line.svg" alt="A right black arrow" />
</Link>
  </div>
);

export default Subheading;
