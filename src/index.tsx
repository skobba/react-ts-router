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
    <h5>React Typescript with router and last location</h5>
    <Router>
      <LastLocationProvider>
        <div>
          <Link to="/">Home</Link>|<Link to="/about">About</Link>|
          <Link to="/hooks">Hooks</Link>|<Link to="/contact">Contact</Link>
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
