import React, { useState } from "react";

function TimeDate() {
  let time = new Date().toLocaleTimeString();
  const [inTime, upTime] = useState(time);
  const updatetime = () => {
    // console.log(time);
    time = new Date().toLocaleTimeString();
    upTime(time)
  };
  setInterval(updatetime, 1000);

  return (
    <div className="card">
      <h1>{inTime}</h1>
    </div>
  );
}

export default TimeDate;
