import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import { Hooks } from "./Hooks";
import { About } from "./About";

function App() {
  return (
    <div className="container">
      <Router>
        <div>
          <nav class="navbar navbar-dark bg-dark">
            <div className="header-link">
              <Link to="/">Hooks</Link> <span style={{ color: "#fff" }}>|</span>{" "}
              <Link to="/about">About</Link>
            </div>
          </nav>

          <hr />

          <Switch>
            <Route exact path="/">
              <Hooks />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
