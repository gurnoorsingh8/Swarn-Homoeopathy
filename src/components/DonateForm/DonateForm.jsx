// src/DonateForm.js
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51RFfKT2MRk7IW2NCYV2ObbPWdw70EQSC0EunVUwe1bgs3YVcvvNAaDJDlgBLV3LxGLcRC8eKOpJsq5C6gtzajAKv00G8E4rf7g");

const DonateForm = () => {
  const [amount, setAmount] = useState("");

  const handleDonate = async () => {
    const stripe = await stripePromise;

    const response = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Number(amount) }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Support Us with a Donation 💖</h2>
      <input
        type="number"
        placeholder="Enter amount in USD"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "10px", width: "200px", marginRight: "10px" }}
      />
      <button onClick={handleDonate} style={{ padding: "10px 20px" }}>
        Donate
      </button>
    </div>
  );
};

export default DonateForm;
