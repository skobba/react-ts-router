import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import Home from "./Home";
import About from "./About";
import Hooks from "./Hooks";
import Contact from "./Contact";

const styles: React.CSSProperties = {
  fontFamily: "sans-serif",
  textAlign: "left"
};

const App = () => (
  <div style={styles}>
    <h5>Click on About to see your last location</h5>
    <Router>
      <LastLocationProvider>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/hooks">Hooks</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/hooks" component={Hooks} />
          <Route path="/contact" component={Contact} />
        </div>
      </LastLocationProvider>
    </Router>
  </div>
);

render(<App />, document.getElementById("root"));
