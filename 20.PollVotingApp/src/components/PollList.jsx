import React from "react";
import Poll from "./Poll";

const PollList = ({ polls, onVote }) => {
  return (
    <div className="polls-list">
      {polls.map((poll, index) => (
        <Poll
          key={index}
          poll={poll}
          onVote={(option) => onVote(index, option)}
        />
      ))}
    </div>
  );
};

export default PollList;
