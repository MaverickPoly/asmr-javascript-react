import React from "react";

const Input = ({ field, setField }) => {
  return (
    <div>
      <input
        className="field"
        value={field}
        onChange={(e) => setField(e.target.value)}
      />
    </div>
  );
};

export default Input;
