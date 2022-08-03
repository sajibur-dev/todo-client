import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Routers from "../Routers/Routers";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <ToastContainer/>
          <NavBar />
        </header>
        <main className="max-w-7xl mx-auto">
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
