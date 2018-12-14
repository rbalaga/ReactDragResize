import React from "react";
import ReactDOM from "react-dom";
import MPanels from "./panels";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function App() {
  return (
    <div className={"App"}>
      <MPanels />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
