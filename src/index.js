import React from "react";
import ReactDOM from "react-dom";
import classes from "./main.css";
import App from "./scripts/containers/App/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
