import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/navbar/Navbar";
import About from "./pages/About";
import Accounts from "./pages/Accounts";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Trading from "./pages/Trading";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/accounts" exact element={<Accounts />} />
        <Route path="/trading" exact element={<Trading />} />
        <Route path="/privacy" exact element={<Privacy />} />
        <Route path="/terms" exact element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
