import React from "react";
import ReactDOM from "react-dom";
import { ServiceW } from "./core";
import { GlobalStyles } from "./styles";
ReactDOM.render(
  <>
    <GlobalStyles />
    <div>Hello there</div>
  </>,
  document.getElementById("root")
);

ServiceW.unregister();
