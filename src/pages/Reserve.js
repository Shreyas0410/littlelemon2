import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Reserve.css'

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: 0,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || !formData.email || formData.guests <= 0) {
      alert("Please fill in all fields and provide a valid number of guests.");
      return;
    }

    // If validation passes, set formSubmitted to true
    setFormSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="container2">
        {formSubmitted ? (
          <div className="success-message">
            <p>Your reservation has been successfully submitted!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Number of Guests:
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                required
              />
            </label>
            <br />
            <button type="submit">Reserve Table</button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Reserve;
