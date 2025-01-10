import React, { useState } from "react";
import Results from "./Results";
import VoteForm from "./VoteForm";

const Poll = ({ poll, onVote }) => {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="poll">
      <h3>{poll.question}</h3>
      {showResults ? (
        <Results options={poll.options} />
      ) : (
        <VoteForm
          options={poll.options}
          onVote={(option) => {
            setShowResults(true);
            onVote(option);
          }}
        />
      )}
      <button className="btn" onClick={() => setShowResults(!showResults)}>
        {showResults ? "Vote again" : "View Results"}
      </button>
    </div>
  );
};

export default Poll;
