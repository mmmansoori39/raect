import React from "react";
import ReactDom from "react-dom";
import "./index.css"
// import App from "./App";
// import Husestate from "./Husestate";
// import TimeDate from "./TimeDate";
// import Calc from "./Calc";
import PlusMinus from "./PlusMinus";
// import Forms from "./Forms";
import ToDoList from "./ToDoList";
// import ApiFetch from "./ApiFetch";
// import Homecheck from "./Homecheck";

ReactDom.render(
  <>
  <div className="center">
  <ToDoList/>
  <PlusMinus />
  {/* <ApiFetch /> */}
  {/* <Homecheck /> */}
  </div>
  </>,
  document.getElementById("root")
);
