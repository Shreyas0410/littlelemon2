import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Menu.css";
import garlic from '../images/menu/garlic.jpg';

const Menu = () => {
  return (
    <>
      <Navbar />

      <div className="menu-container">
        <section className="menu-section">
          <h2>Appetizers</h2>
          <div className="menu-item">
            <img
              className="menu-item-image"
              src={garlic}
              alt="Garlic Bread"
            />
            <div className="menu-item-details">
              <span className="menu-item-name">Garlic Bread</span>
              <span className="menu-item-price">$5.99</span>
            </div>
          </div>
          <div className="menu-item">
            <img
              className="menu-item-image"
              src={garlic}
              alt="Caprese Salad"
            />
            <div className="menu-item-details">
              <span className="menu-item-name">Caprese Salad</span>
              <span className="menu-item-price">$7.99</span>
            </div>
          </div>
          {/* Add more appetizer items as needed */}
        </section>

        <section className="menu-section">
          <h2>Main Courses</h2>
          <div className="menu-item">
            <img
              className="menu-item-image"
              src={garlic}
              alt="Spaghetti Bolognese"
            />
            <div className="menu-item-details">
              <span className="menu-item-name">Spaghetti Bolognese</span>
              <span className="menu-item-price">$12.99</span>
            </div>
          </div>
          <div className="menu-item">
            <img
              className="menu-item-image"
              src={garlic}
              alt="Margherita Pizza"
            />
            <div className="menu-item-details">
              <span className="menu-item-name">Margherita Pizza</span>
              <span className="menu-item-price">$14.99</span>
            </div>
          </div>
          {/* Add more main course items as needed */}
        </section>

        <section className="menu-section">
          <h2>Desserts</h2>
          <div className="menu-item">
            <img
              className="menu-item-image"
              src={garlic}
              alt="Tiramisu"
            />
            <div className="menu-item-details">
              <span className="menu-item-name">Tiramisu</span>
              <span className="menu-item-price">$8.99</span>
            </div>
          </div>
          <div className="menu-item">
            <img
              className="menu-item-image"
              src={garlic}
              alt="Chocolate Mousse"
            />
            <div className="menu-item-details">
              <span className="menu-item-name">Chocolate Mousse</span>
              <span className="menu-item-price">$6.99</span>
            </div>
          </div>
          {/* Add more dessert items as needed */}
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Menu;
