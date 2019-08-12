import React from "react";
import ReactDOM from "react-dom";
import "./styles/base/main.css";
import App from "./scripts/containers/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
