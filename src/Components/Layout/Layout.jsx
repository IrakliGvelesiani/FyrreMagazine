import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Routes from "../../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import "../../index.css";

const Layout = () => {
  return (
    <BrowserRouter>
      <LayoutContent />
    </BrowserRouter>
  );
};

const LayoutContent = () => {
  const location = useLocation();

  const hideHeaderAndFooter = location.pathname !== "/" && !location.pathname.startsWith("/magazine") && !location.pathname.startsWith("/authors") && !location.pathname.startsWith("/podcast") && !location.pathname.startsWith("/template-info");

  return (
    <>
      {!hideHeaderAndFooter && <Header />}
      <Switch>
        <Route path="/" component={Routes} />
        <Route component={NotFound} />
      </Switch>
      {!hideHeaderAndFooter && <Footer />}
    </>
  );
};

export default Layout;
