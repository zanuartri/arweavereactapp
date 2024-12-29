// Import required dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import "./index.css";

// Main App Component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Arweave-Compatible React App</h1>
        <p className="App-description">
          This simple app is designed to be deployed on the Arweave network.
        </p>
        <button className="App-button">Get Started</button>
      </header>
    </div>
  );
}

// Root Component with HashRouter for Hash Routing
function Root() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  );
}

// Render the Root Component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
