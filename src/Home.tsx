import * as React from "react";
import {
  withLastLocation,
  WithLastLocationProps
} from "react-router-last-location";

const Home: React.FC<WithLastLocationProps> = ({ lastLocation }) => (
  <div>
    <h1>Home!</h1>
    <h2>Your last location</h2>
    <pre>{JSON.stringify(lastLocation, undefined, 2)}</pre>
  </div>
);

export default withLastLocation(Home);
