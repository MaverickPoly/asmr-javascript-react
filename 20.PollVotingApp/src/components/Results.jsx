import React from "react";

const Results = ({ options }) => {
  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="results">
      {options.map((option, index) => {
        return (
          <div key={index}>
            <strong>{option.option}</strong>: {option.votes} votes (
            {totalVotes > 0
              ? ((option.votes / totalVotes) * 100).toFixed(1)
              : 0}
            % )
          </div>
        );
      })}
    </div>
  );
};

export default Results;
