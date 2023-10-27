import React from "react";
import ReactDOM from "react-dom/client";

// import Calc from './Calc/Calc';
// import Calc2 from "./Calc2/Calc2";
// import Count from "./CountApp/Count";
import Clock from './DigitalClock/Clock'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Calc/> */}
    {/* <Calc2 /> */}
    {/* <Count /> */}
    <Clock/>
  </React.StrictMode>
);
