import React from "react";
import "./Clock.css";
function Clock() {
  const time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = React.useState(time);

  const updateData = () => {
    let newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };
  setInterval(() => {
    updateData();
  }, 1000);

  return (
    <>
      <div className="clock">
        <div className="child">
          <h1>{ctime}</h1>
        </div>
      </div>
    </>
  );
}

export default Clock;
