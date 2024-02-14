import React, { useState } from "react";
import Testimonials from "./Testimonials";

const DonatePage = () => {
  const [amount, setAmount] = useState(0);
  const [frequency, setFrequency] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "amount") {
      setAmount(e.target.value);
    } else if (e.target.name === "frequency") {
      setFrequency(e.target.value);
    } 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit donation to organization
  };

  return (
    <div id="donatePage" className="pageContent">
      <div id="donateContent">
        <h1>Considering a Donation?</h1>

        <p>
          Thank you for considering making a donation to our meditation
          nonprofit. Your donation will help us continue to provide resources
          and support to those in need. We appreciate your generosity!
        </p>
        <p>
          Your donation will go a long way in helping us reach our goal of
          providing meditation resources to those who need it most. Your
          contribution will make a real difference in the lives of many people.
        </p>
      </div>

      <form onSubmit={handleSubmit} id="donateForm">
        <h2>Donate Today!</h2>
        <label>
          Amount:
          <div id="amountOptions">
            <input type="radio" name="amount" value="5" onChange={handleChange} />$5
            <input type="radio" name="amount" value="50" onChange={handleChange} />$50
            <input type="radio" name="amount" value="100" onChange={handleChange} />$100
          </div>

          <input
            type="number"
            name="amount"
            placeholder="Custom Amount"
            onChange={handleChange}
          />
        </label>
        <label>
          Frequency:
          <input
            type="radio"
            name="frequency"
            value="one-time"
            onChange={handleChange}
          />
          One-Time
          <input
            type="radio"
            name="frequency"
            value="monthly"
            onChange={handleChange}
          />
          Monthly
        </label>
        <input type="submit" value="Continue " />
      </form>
    </div>
  );
};

export default DonatePage;
