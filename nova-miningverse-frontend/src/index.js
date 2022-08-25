import { StrictMode } from "react";
import ReactDOM from "react-dom";

import WebFont from "webfontloader";
import App from "./App";

WebFont.load({
    google: {
        families: ['Poppins', "Urbanist:700,400"]
    }
  });

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
    