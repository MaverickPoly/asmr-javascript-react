import React from "react";

const VoteForm = ({ options, onVote }) => {
  return (
    <div className="vote-form">
      {options.map((option, index) => (
        <button className="vote-btn" key={index} onClick={() => onVote(option)}>
          {option.option}
        </button>
      ))}
    </div>
  );
};

export default VoteForm;
