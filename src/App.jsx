import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProductList from "./ProductList";
import AboutUs from "./AboutUs";
import CartItem from "./CartItem";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <Router>
      <div className="app-container">
        {!showProductList ? (
          <div className="landing-page">
            <div className="background-image"></div>
            <div className="content">
              <div className="landing_content">
                <h1>Welcome To Paradise Nursery</h1>
                <div className="divider"></div>
                <p>Where Green Meets Serenity</p>
                <button
                  className="get-started-button"
                  onClick={handleGetStartedClick}
                >
                  Get Started
                </button>
              </div>
              <div className="aboutus_container">
                <AboutUs />
              </div>
            </div>
          </div>
        ) : (
          <div className="product-list-container visible">
            <Routes>
              <Route path="/" element={<Navigate to="/product-list" replace />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/cart" element={<CartItem />} />
              <Route path="*" element={<Navigate to="/product-list" replace />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
