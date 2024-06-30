import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Routes from "../../Routes/Routes"; 
import Header from "../Header/Header"; 
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound"; 

// Main layout component
const Layout = () => {
  return (
    <BrowserRouter>
      <LayoutContent /> {/* Renders main layout content */}
    </BrowserRouter>
  );
};

// Component managing main layout content
const LayoutContent = () => {
  const location = useLocation(); // React hook to get current location

  // Determine whether to hide header and footer based on current path
  const hideHeaderAndFooter =
    location.pathname !== "/" &&
    !location.pathname.startsWith("/magazine") &&
    !location.pathname.startsWith("/authors") &&
    !location.pathname.startsWith("/podcast") &&
    !location.pathname.startsWith("/template-info");

  return (
    <>
      {!hideHeaderAndFooter && <Header />} {/* Renders header if not hidden */}
      <Switch>
        <Route path="/" component={Routes} /> {/* Renders routes */}
        <Route component={NotFound} /> {/* Renders not found component for unmatched routes */}
      </Switch>
      {!hideHeaderAndFooter && <Footer />} {/* Renders footer if not hidden */}
    </>
  );
};

export default Layout;
