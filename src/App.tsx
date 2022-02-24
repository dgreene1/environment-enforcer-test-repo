import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { envVars } from "./wrappedEnvVars";

function App() {
  let urlWeWantToHit: string = "NOTHING CAME FROM ENVIRONMENT ENFORCER";
  // We're reassigning a mutable variable because we want to ensure that environment enforcer is type safe
  urlWeWantToHit = envVars.MY_API_URL;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div data-testid="my-api-url-test">{urlWeWantToHit}</div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
