import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((p) => p + 1);
  };

  const decrement = () => {
    setCount((p) => p - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <button className="btn" onClick={decrement}>
        -
      </button>
      <span className="count">{count}</span>
      <button className="btn" onClick={increment}>
        +
      </button>
      <button className="btn" onClick={reset}>
        R
      </button>
    </div>
  );
}

export default App;
