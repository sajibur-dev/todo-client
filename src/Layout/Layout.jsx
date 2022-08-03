import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Routers from "../Routers/Routers";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBar />
        </header>
        <main>
          <Routers />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
