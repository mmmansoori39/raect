import React, { useState } from "react";
import "./index.css";

let cssstyle = {};

function Husestate() {
  // const state = useState();
  let [intState, setState] = useState(0);

  const InCount = () => {
    setState(intState + 1);
  };
  return (
    <div className="card-state">
      <h1 style={cssstyle}>{intState}</h1>
      <button onClick={InCount}>Click</button>
    </div>
  );
}

export default Husestate;
