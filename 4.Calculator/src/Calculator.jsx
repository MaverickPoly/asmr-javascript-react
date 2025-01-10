import React, { useState } from "react";
import Input from "./Input";

const Calculator = () => {
  const [field, setField] = useState(0);

  const addChar = (char) => {
    setField((prev) => prev + char);
  };

  const percent = () => {
    try {
      const result = eval(field) / 100;
      setField(result.toString());
    } catch (e) {
      setField("Error");
    }
  };
  const calculate = () => {
    try {
      const result = eval(field);
      setField(result.toString());
    } catch (e) {
      setField("Error");
    }
  };
  const clearField = () => {
    setField("");
  };

  const deleteChar = () => {
    setField((f) => f.slice(0, -1));
  };

  return (
    <div className="calculator">
      <Input field={field} setField={setField} />
      <div className="buttons">
        <button className="btn delete" onClick={clearField}>
          C
        </button>
        <button className="btn delete" onClick={deleteChar}>
          D
        </button>
        <button className="btn operation" onClick={percent}>
          %
        </button>
        <button className="btn operation" onClick={() => addChar("+")}>
          +
        </button>

        <button className="btn number" onClick={() => addChar("7")}>
          7
        </button>
        <button className="btn number" onClick={() => addChar("8")}>
          8
        </button>
        <button className="btn number" onClick={() => addChar("9")}>
          9
        </button>
        <button className="btn operation" onClick={() => addChar("-")}>
          -
        </button>

        <button className="btn number" onClick={() => addChar("4")}>
          4
        </button>
        <button className="btn number" onClick={() => addChar("5")}>
          5
        </button>
        <button className="btn number" onClick={() => addChar("6")}>
          6
        </button>
        <button className="btn operation" onClick={() => addChar("*")}>
          ✕
        </button>

        <button className="btn number" onClick={() => addChar("1")}>
          1
        </button>
        <button className="btn number" onClick={() => addChar("2")}>
          2
        </button>
        <button className="btn number" onClick={() => addChar("3")}>
          3
        </button>
        <button className="btn operation" onClick={() => addChar("/")}>
          ÷
        </button>

        <button className="btn number" onClick={() => addChar("0")}>
          0
        </button>
        <button className="btn number" onClick={() => addChar(".")}>
          .
        </button>
        <button className="btn eval" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
