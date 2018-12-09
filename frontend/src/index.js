import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";

import "./static/css/radial-progress.css";
import "./static/css/styling.css";

// <link rel="stylesheet" href="./css/radial-progress.css" type="text/css" />
// <link rel="stylesheet" href="./css/styling.css" />

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
