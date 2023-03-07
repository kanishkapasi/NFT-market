import React from "react";
import Navigation from "./Components/Navbar/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Components/Home/Home";
import Collection from "./Components/Collection/Collection";
import TopCreaters from "./Components/TopCreaters/TopCreaters";
import Catergorise from "./Components/Catergorise/Catergorise";
import MoreNFT from "./Components/MoreNFT/MoreNFT";
import Works from "./Components/Works/Works";
import Search from "./Components/Search/Search";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation fixed="top" />
      <Home />
      <Collection />
      <TopCreaters />
      <Catergorise />
      <MoreNFT />
      <Works />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
