import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Outlet, useLocation } from "react-router-dom";
import Sponsors from "./components/sponsors/sponsors";
import Aboutus from "./components/about us/aboutus";
import Contactus from "./components/contact us/contactus";

function Layout() {
  const location = useLocation();

  // Define the routes that should show only the Navbar and Footer
  const minimalLayoutRoutes = ["/signup", "/newbook", "/login"];

  return (
    <>
      <Navbar />
      <Outlet />
      {!minimalLayoutRoutes.includes(location.pathname) && (
        <>
          <Aboutus />
          <Sponsors />
          <Contactus />
        </>
      )}
      <Footer />
    </>
  );
}

export default Layout;
