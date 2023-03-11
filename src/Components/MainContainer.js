import React from "react";
import Head from "./Head";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div>
      <Head />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainContainer;
