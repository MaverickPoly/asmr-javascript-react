import React, { useState } from "react";

const quotes = [
  "The first step is to establish that something is possible; then probability will occur.",
  "Persistence is very important. You should not give up unless you are forced to give up.",
  "I think it is possible for ordinary people to choose to be extraordinary.",
  "When something is important enough, you do it even if the odds are not in your favor.",
  "Don't stop when you are tired, stop when you are done.",
  "If you choose to do something, attack it.",
  "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
  "First you do, then you become.",
];

const RandomQuotes = () => {
  const [current, setCurrent] = useState("");

  const getQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setCurrent(quotes[index]);
  };

  return (
    <div className="container">
      <h1 className="heading">Random quote generator</h1>
      <button className="btn" onClick={getQuote}>
        Generate quote
      </button>
      <q class="quote">{current}</q>
    </div>
  );
};

export default RandomQuotes;
