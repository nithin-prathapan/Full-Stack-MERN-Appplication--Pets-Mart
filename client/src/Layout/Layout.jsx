import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Routers from "../Routes/Routers";
const Layout = () => {
  const { isAdmin } = useSelector((state) => state.auth)
  return (
    <>
      {
        isAdmin ? (<></>) : (<Header />)
      }
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
