import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="fbc98843-4c3e-441e-9e7c-571cd88e0bc1" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
