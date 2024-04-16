import Button from "../UI/Button/Button";
import NewsletterSignUp from "./NewsletterSignUp";
import PopularArticles from "./PopularArticles";

export default function Sidebar() {
  return (
    <aside>
      <div className="widget">
        <div className="widget__title">
          <h4>Printmagazine</h4>
          <h3>03 / 2022</h3>
        </div>
        <div className="widget__img">
          <img
            src="/images/homepage/magazine-cover.jpg"
            alt="A rust-colored magazine cover, showing a sculpture of a man, the words 'FYRRE MAGAZIN' on the top left and '03/2022' on the bottom right, a gold badge just above with 'EXCLUSIVE JAKOB GRONBERG INTERVIEW' printed on it, and an arrow pointing in the bottom right corner"
          />
        </div>
        <div className="widget__button">
          <Button text={"Buy Now"}>Order</Button>
        </div>
        <PopularArticles />
      <NewsletterSignUp />
      </div>

      
    </aside>
  );
}
