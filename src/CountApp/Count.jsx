import React from "react";
import "./Count.css";

function Count() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>{count}</p>
      <div className="btns">
        <button className="inc" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="dnc" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}
export default Count;
