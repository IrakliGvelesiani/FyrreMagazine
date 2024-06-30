import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Authors from "../Pages/Authors/Authors";
import Magazine from "../Pages/Magazine/Magazine";
import Podcast from "../Pages/Podcast/Podcast";
import ArticleDetails from "../Components/Details/ArticleDetails/ArticleDetails";
import PodcastDetails from "../Components/Details/PodcastDetails/PodcastDetails";
import AuthorsDetails from "../Components/Details/AuthorDetails/AuthorsDetails";
import StyleGuide from "../Components/TemplateInfo/StyleGuide";
import Licensing from "../Components/TemplateInfo/Licensing";
import Changelog from "../Components/TemplateInfo/Changelog";
import NotFound from "../Components/NotFound/NotFound";
import CookieBanner from "../Components/CookieBanner/CookieBanner";



const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Routes = () => {
  return (
    <>
      <ScrollToTop />
      <CookieBanner/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/magazine" component={Magazine} exact />
        <Route path="/magazine/:slug" component={ArticleDetails} />
        <Route path="/authors" component={Authors} exact />
        <Route path="/authors/:slug" component={AuthorsDetails} />
        <Route path="/podcast" component={Podcast} exact />
        <Route path="/podcast/:slug" component={PodcastDetails} />
        <Route path="/template-info/styleguide" component={StyleGuide} />
        <Route path="/template-info/licensing" component={Licensing} />
        <Route path="/template-info/changelog" component={Changelog} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
